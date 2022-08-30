package keeper

import (
	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) UpdateOrdersStatus(ctx sdk.Context, crowId, bOrderId uint64, bOrderStatus, sOrderStatus string) error {
	bOrder, found := k.GetBuyOrder(ctx, bOrderId)
	if !found {
		return types.ErrBuyOrderNotFound
	}

	if bOrder.GetStatus() == bOrderStatus {
		return types.ErrStatusAlreadyUpdate
	}

	sOrder, found := k.GetSellOrder(ctx, bOrder.SellOrderId)
	if !found {
		return types.ErrSellOrderNotFound
	}

	if sOrder.GetStatus() == sOrderStatus {
		return types.ErrStatusAlreadyUpdate
	}

	bOrder.Status = bOrderStatus
	bOrder.CrowId = crowId

	sOrder.Status = sOrderStatus
	sOrder.CrowId = crowId

	k.SetBuyOrder(ctx, bOrder)
	k.SetSellOrder(ctx, sOrder)

	return nil
}

func (k Keeper) GetCollateralFromBuyOrderId(ctx sdk.Context, bOrderId uint64) (sdk.Coin, error) {
	bOrder, found := k.GetBuyOrder(ctx, bOrderId)
	if !found {
		return sdk.Coin{}, types.ErrBuyOrderNotFound
	}

	return bOrder.Collateral, nil
}

func (k Keeper) GetBuyerPaymentFromBuyOrderId(ctx sdk.Context, bOrderId uint64) (sdk.Coin, error) {
	bOrder, found := k.GetBuyOrder(ctx, bOrderId)
	if !found {
		return sdk.Coin{}, types.ErrBuyOrderNotFound
	}

	return bOrder.Price, nil
}

func (k Keeper) ValidateSellerBeginEscrow(ctx sdk.Context, buyOrderId uint64, creator string) error {
	bOrder, found := k.GetBuyOrder(ctx, buyOrderId)
	if !found {
		return types.ErrBuyOrderNotFound
	}

	sOrder, found := k.GetSellOrder(ctx, bOrder.SellOrderId)
	if !found {
		return types.ErrSellOrderNotFound
	}

	sellerAddr, err := k.whitelistKeeper.GetSellerAddrFromId(ctx, sOrder.SellerId)
	if err != nil {
		return err
	}

	if sellerAddr != creator {
		return types.ErrInvalidSellerIdForAddr
	}

	return nil
}

func (k Keeper) ValidateBuyerJoinEscrow(ctx sdk.Context, buyOrderId uint64, creator string) error {
	bOrder, found := k.GetBuyOrder(ctx, buyOrderId)
	if !found {
		return types.ErrBuyOrderNotFound
	}

	buyerAddr, err := k.whitelistKeeper.GetBuyerAddrFromId(ctx, bOrder.BuyerId)
	if err != nil {
		return err
	}

	if buyerAddr != creator {
		return types.ErrInvalidBuyerIdForAddr
	}

	return nil
}
