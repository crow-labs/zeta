package keeper

import (
	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) validatePrepareItem(ctx sdk.Context, msg types.MsgPrepareItem) error {
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

func NewItem(itemId, sellerId uint64, title, desciption, externalLink string) types.Item {
	item := &types.Item{
		ItemId:       itemId,
		Title:        title,
		Description:  desciption,
		ExternalLink: externalLink,
		SellerId:     sellerId,
	}

	return *item
}

func (k Keeper) CreateItem(ctx sdk.Context, msg types.MsgPrepareItem) (uint64, error) {
	err := k.validatePrepareItem(ctx, msg)
	if err != nil {
		return 0, err
	}

	itemId := k.getNextItemIdAndIncrement(ctx)
	item := NewItem(itemId, msg.SellerId, msg.Title, msg.Desciption, msg.ExternalLink)

	err = k.whitelistKeeper.AddItemToSeller(ctx, msg.SellerId, itemId)
	if err != nil {
		return 0, err
	}

	k.SetItem(ctx, item)

	return itemId, nil
}

func (k Keeper) validateRemoveItem(ctx sdk.Context, msg types.MsgRemoveItem) error {
	item, found := k.GetItem(ctx, msg.ItemId)
	if !found {
		return types.ErrItemNotFound
	}

	if addr, err := k.whitelistKeeper.GetSellerAddrFromId(ctx, item.SellerId); err != nil {
		return err
	} else if addr != msg.Creator {
		return types.ErrInvalidSellerIdForAddr
	}

	return nil
}

func (k Keeper) DeleteItem(ctx sdk.Context, msg types.MsgRemoveItem) error {
	err := k.validateRemoveItem(ctx, msg)
	if err != nil {
		return err
	}

	err = k.whitelistKeeper.RemoveItemFromSeller(ctx, msg.SellerId, msg.ItemId)
	if err != nil {
		return err
	}

	k.RemoveItem(ctx, msg.ItemId)

	return nil
}
