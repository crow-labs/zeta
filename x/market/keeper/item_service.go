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
	}

	if sellerAddr != msg.Creator {
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
