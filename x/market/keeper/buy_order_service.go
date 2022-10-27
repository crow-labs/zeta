package keeper

import (
	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) validatePlaceBuyOrder(ctx sdk.Context, msg types.MsgPlaceBuyOrder) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	buyerAddr, err := k.whitelistKeeper.GetBuyerAddrFromId(ctx, msg.BuyerId)
	if err != nil {
		return err
	} else if buyerAddr != msg.Creator {
		return types.ErrInvalidBuyerIdForAddr
	}

	sellOrder, found := k.GetSellOrder(ctx, msg.SellOrderId)
	if !found {
		return types.ErrSellOrderNotFound
	}

	sellerAddr, err := k.whitelistKeeper.GetSellerAddrFromId(ctx, sellOrder.SellerId)
	if err != nil {
		return err
	} else if sellerAddr == buyerAddr {
		return types.ErrBuyerIsSeller
	}

	return nil
}

func NewBuyOrder(buyOrderId, sellOrderId, buyerId uint64, price, collateral sdk.Coin) types.BuyOrder {
	buyOrder := &types.BuyOrder{
		BuyOrderId:  buyOrderId,
		SellOrderId: sellOrderId,
		BuyerId:     buyerId,
		Price:       price,
		Collateral:  collateral,
	}

	return *buyOrder
}

func (k Keeper) CreateBuyOrder(ctx sdk.Context, msg types.MsgPlaceBuyOrder) (uint64, error) {
	err := k.validatePlaceBuyOrder(ctx, msg)
	if err != nil {
		return 0, err
	}

	buyOrderId := k.getNextBuyOrderIdAndIncrement(ctx)
	buyOrder := NewBuyOrder(buyOrderId, msg.SellOrderId, msg.BuyerId, msg.Price, msg.Collateral)

	err = k.whitelistKeeper.AddBuyOrderToBuyer(ctx, msg.BuyerId, buyOrderId)
	if err != nil {
		return 0, err
	}

	k.SetBuyOrder(ctx, buyOrder)

	return buyOrderId, nil
}
