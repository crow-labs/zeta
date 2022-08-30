package keeper

import (
	"fmt"
	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

func (k Keeper) validateCrowSeller(ctx sdk.Context, msg types.MsgBeginEscrow) error {
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
	err := k.validateCrowSeller(ctx, msg)
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

	collateral, err := k.marketKeeper.GetCollateralFromBuyOrderId(ctx, msg.BuyOrderId)
	if err != nil {
		return 0, err
	}

	if !k.bankKeeper.HasBalance(ctx, fromAddr, collateral) {
		return 0, types.ErrSellerInsufficientFunds
	}

	// TODO: add collateral minimums (add as a module param?)

	// escrow collateral from seller
	err = k.bankKeeper.SendCoins(ctx, fromAddr, crow.GetAddress(), sdk.NewCoins(collateral))
	if err != nil {
		return 0, err
	}

	crow.SellerCollateral = collateral
	crow.Status = "sellerEscrowComplete"

	// TODO: make strings module constants
	err = k.marketKeeper.UpdateOrdersStatus(ctx, crow.CrowId, crow.BuyOrderId, "sellerAccepted", "sellerEscrowed")
	if err != nil {
		return 0, err
	}

	k.SetCrow(ctx, crow)
	return crowId, nil
}

func (k Keeper) validateCrowBuyer(ctx sdk.Context, msg types.MsgJoinEscrow) error {
	crow, found := k.GetCrow(ctx, msg.CrowId)
	if !found {
		return types.ErrCrowNotFound
	}

	return k.marketKeeper.ValidateBuyerJoinEscrow(ctx, crow.BuyOrderId, msg.Creator)
}

func (k Keeper) JoinCrow(ctx sdk.Context, msg types.MsgJoinEscrow) error {
	err := k.validateCrowBuyer(ctx, msg)
	if err != nil {
		return err
	}

	crow, _ := k.GetCrow(ctx, msg.CrowId)

	fromAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(fmt.Sprintf("could not bech32 decode Addr of crow w/ id: %d", crow.CrowId))
	}

	collateral, err := k.marketKeeper.GetCollateralFromBuyOrderId(ctx, crow.BuyOrderId)
	if err != nil {
		return err
	}

	payment, err := k.marketKeeper.GetBuyerPaymentFromBuyOrderId(ctx, crow.BuyOrderId)
	if err != nil {
		return err
	}

	if collateral.Denom == payment.Denom && !k.bankKeeper.HasBalance(ctx, fromAddr, collateral.Add(payment)) {
		return types.ErrBuyerInsufficientFunds
	} else if collateral.Denom != payment.Denom && !(k.bankKeeper.HasBalance(ctx, fromAddr, collateral) && k.bankKeeper.HasBalance(ctx, fromAddr, payment)) {
		return types.ErrBuyerInsufficientFunds
	}
	// escrow collateral and payment from buyer
	err = k.bankKeeper.SendCoins(ctx, fromAddr, crow.GetAddress(), sdk.NewCoins(collateral))
	if err != nil {
		return err
	}

	err = k.bankKeeper.SendCoins(ctx, fromAddr, crow.GetAddress(), sdk.NewCoins(payment))
	if err != nil {
		return err
	}

	crow.BuyerCollateral = collateral
	crow.BuyerPayment = payment
	crow.Status = "buyerEscrowComplete"

	// TODO: make strings module constants
	err = k.marketKeeper.UpdateOrdersStatus(ctx, crow.CrowId, crow.BuyOrderId, "buyerEscrowed", "handling")
	if err != nil {
		return err
	}

	k.SetCrow(ctx, crow)
	return nil
}
