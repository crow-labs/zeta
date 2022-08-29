package keeper

import (
	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) validateListItem(ctx sdk.Context, msg types.MsgListItem) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	sellerAddr, err := k.whitelistKeeper.GetSellerAddrFromId(ctx, msg.SellerId)
	if err != nil {
		return err
	} else if sellerAddr != msg.Creator {
		return types.ErrInvalidSellerIdForAddr
	}

	return nil
}

func NewSellOrder(sellOrderId, itemId, sellerId uint64, price, collateral sdk.Coin) types.SellOrder {
	sellOrder := &types.SellOrder{
		SellOrderId: sellOrderId,
		ItemId:      itemId,
		SellerId:    sellerId,
		CrowId:      0,
		Price:       price,
		Collateral:  collateral,
	}

	return *sellOrder
}

func (k Keeper) CreateSellOrder(ctx sdk.Context, msg types.MsgListItem) (uint64, error) {
	err := k.validateListItem(ctx, msg)
	if err != nil {
		return 0, err
	}

	sellOrderId := k.getNextSellOrderIdAndIncrement(ctx)
	sellOrder := NewSellOrder(sellOrderId, msg.ItemId, msg.SellerId, msg.Price, msg.Collateral)

	err = k.whitelistKeeper.AddSellOrderToSeller(ctx, msg.SellerId, sellOrderId)
	if err != nil {
		return 0, err
	}

	k.SetSellOrder(ctx, sellOrder)

	return sellOrderId, nil
}

func (k Keeper) validateAcceptBuyOrder(ctx sdk.Context, msg types.MsgAcceptBuyOrder) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	buyOrder, found := k.GetBuyOrder(ctx, msg.BuyOrderId)
	if !found {
		return types.ErrBuyOrderNotFound
	}

	sellOrder, found := k.GetSellOrder(ctx, buyOrder.SellOrderId)
	if !found {
		return types.ErrSellOrderNotFound
	}

	if sellOrder.SellerId != msg.SellerId {
		return types.ErrNotSellerForBuyOrder
	}

	sellerAddr, err := k.whitelistKeeper.GetSellerAddrFromId(ctx, sellOrder.SellerId)
	if err != nil {
		return err
	} else if sellerAddr != msg.Creator {
		return types.ErrInvalidSellerIdForAddr
	}

	// validate seller has collateral to spend

	return nil
}

func (k Keeper) AcceptBuyOrder(ctx sdk.Context, msg types.MsgAcceptBuyOrder) error {
	if err := k.validateAcceptBuyOrder(ctx, msg); err != nil {
		return err
	}

	// get next crow id

	// create crow with crow id

	// update sellOrder crowId

	// update buyOrder crowId

	// escrow collateral

	return nil
}
