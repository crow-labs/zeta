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
		Price:       price,
		Collateral:  collateral,
	}

	return *sellOrder
}

func (k Keeper) CreateSellOrder(ctx sdk.Context, msg types.MsgListItem) (uint64, error) {
	err := k.validateListItem(ctx, msg)
	if err != nil {
		return 0, nil
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
