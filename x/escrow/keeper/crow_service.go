package keeper

import (
	"fmt"
	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

func (k Keeper) validateCrow(ctx sdk.Context, msg types.MsgBeginEscrow) error {
	return k.marketKeeper.ValidateSellerBeginEscrow(ctx, msg.BuyOrderId, msg.Creator)
}

func NewCrow(crowId, buyOrderId uint64) types.Crow {

	crow := &types.Crow{
		CrowId:           crowId,
		BuyOrderId:       buyOrderId,
		DisputeId:        0,
		VerdictId:        0,
		BuyerPayment:     sdk.Coin{},
		SellerCollateral: sdk.Coin{},
		BuyerCollateral:  sdk.Coin{},
		Status:           "begin",
		EscrowAddr:       types.NewCrowAddress(crowId).String(),
	}

	return *crow
}

func (k Keeper) CreateCrow(ctx sdk.Context, msg types.MsgBeginEscrow) (uint64, error) {
	err := k.validateCrow(ctx, msg)
	if err != nil {
		return 0, err
	}

	crowId := k.getNextCrowIdAndIncrement(ctx)
	crow := NewCrow(crowId, msg.BuyOrderId)

	// create escrow account
	acc := k.accountKeeper.NewAccount(
		ctx,
		authtypes.NewModuleAccount(
			authtypes.NewBaseAccountWithAddress(crow.GetAddress()),
			crow.GetAddress().String(),
		),
	)
	k.accountKeeper.SetAccount(ctx, acc)

	fromAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(fmt.Sprintf("could not bech32 decode Addr of crow w/ id: %d", crow.CrowId))
	}

	collateral, err := k.marketKeeper.GetCollateralFromBuyOrder(ctx, msg.BuyOrderId)
	if err != nil {
		return 0, err
	}

	// TODO: add collateral minimums (add as a module param?)

	// escrow collateral from seller
	err = k.bankKeeper.SendCoins(ctx, fromAddr, crow.GetAddress(), sdk.NewCoins(collateral))
	if err != nil {
		return 0, err
	}

	crow.Status = "sellerEscrowComplete"

	// TODO: make strings module constants
	err = k.marketKeeper.UpdateOrdersStatus(ctx, crow.CrowId, crow.BuyOrderId, "sellerAccepted", "collateralEscrowed")
	if err != nil {
		return 0, err
	}

	k.SetCrow(ctx, crow)
	return crowId, nil
}
