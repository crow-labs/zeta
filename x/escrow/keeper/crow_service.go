package keeper

import (
	"fmt"
	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

func NewCrow(crowId, buyOrderId uint64) types.Crow {

	crow := &types.Crow{
		CrowId:     crowId,
		BuyOrderId: buyOrderId,
		DisputeId:  0,
		VerdictId:  0,
		Amount:     sdk.Coin{},
		SellerCol:  sdk.Coin{},
		BuyerCol:   sdk.Coin{},
		Status:     "begin",
		Addr:       types.NewCrowAddress(crowId).String(),
	}

	return *crow
}

func (k Keeper) CreateCrow(ctx sdk.Context, msg types.MsgBeginEscrow) (uint64, error) {
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

	// escrow collateral from seller
	err = k.bankKeeper.SendCoins(ctx, fromAddr, crow.GetAddress())
	if err != nil {
		return 0, err
	}

	crow.Status = "sellerEscrowComplete"

	k.SetCrow(ctx, crow)
	return crowId, nil
}
