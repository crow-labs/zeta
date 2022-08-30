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

	item, found := k.GetItem(ctx, msg.ItemId)
	if !found {
		return types.ErrItemNotFound
	}

	if item.SellerId != msg.SellerId {
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
		Status:      "pending",
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

func (k Keeper) validateAcceptBuyOrder(ctx sdk.Context, msg types.MsgAcceptBuyOrder) (types.BuyOrder, types.SellOrder, error) {
	if err := msg.ValidateBasic(); err != nil {
		return types.BuyOrder{}, types.SellOrder{}, err
	}

	buyOrder, found := k.GetBuyOrder(ctx, msg.BuyOrderId)
	if !found {
		return types.BuyOrder{}, types.SellOrder{}, types.ErrBuyOrderNotFound
	}

	sellOrder, found := k.GetSellOrder(ctx, buyOrder.SellOrderId)
	if !found {
		return types.BuyOrder{}, types.SellOrder{}, types.ErrSellOrderNotFound
	}

	if sellOrder.SellerId != msg.SellerId {
		return types.BuyOrder{}, types.SellOrder{}, types.ErrNotSellerForBuyOrder
	}

	sellerAddr, err := k.whitelistKeeper.GetSellerAddrFromId(ctx, sellOrder.SellerId)
	if err != nil {
		return types.BuyOrder{}, types.SellOrder{}, err
	} else if sellerAddr != msg.Creator {
		return types.BuyOrder{}, types.SellOrder{}, types.ErrInvalidSellerIdForAddr
	}

	return buyOrder, sellOrder, nil
}

func (k Keeper) AcceptBuyOrderAndEscrow(ctx sdk.Context, msg types.MsgAcceptBuyOrder) (uint64, error) {

	_, _, err := k.validateAcceptBuyOrder(ctx, msg)
	if err != nil {
		return 0, err
	}

	// create crow and escrow seller collateral
	// crowId, err := k.escrowKeeper.CreateCrow(ctx, *msg)
	// if err != nil {
	// 	return 0, err
	// }

	// // update buy order
	// bOrder.CrowId = crowId
	// bOrder.Status = "AcceptedBySeller"

	// // update sell order
	// sOrder.CrowId = crowId
	// sOrder.Status = "AcceptedBuyOrder"

	// // update store
	// k.SetBuyOrder(ctx, bOrder)
	// k.SetSellOrder(ctx, sOrder)
	return 0, nil
}
