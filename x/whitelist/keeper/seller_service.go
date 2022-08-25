package keeper

import (
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) validateSellerApplication(ctx sdk.Context, msg types.MsgSellerApplication) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	member, found := k.GetMember(ctx, msg.Creator)
	if !found {
		return sdkerrors.Wrapf(types.ErrMemberNotFound, "creator %s", msg.Creator)
	}

	if member.SellerId != 0 {
		return sdkerrors.Wrapf(types.ErrAlreadySeller, "creator %s", msg.Creator)
	}

	return nil
}

func NewSeller(sellerId uint64, name, contactInfo, address string) types.Seller {
	seller := &types.Seller{
		SellerId:    sellerId,
		Name:        name,
		ContactInfo: contactInfo,
		Address:     address,
		Status:      "whitelisted",
	}

	return *seller
}

func (k Keeper) CreateSeller(ctx sdk.Context, msg types.MsgSellerApplication) (uint64, error) {
	err := k.validateSellerApplication(ctx, msg)
	if err != nil {
		return 0, err
	}

	sellerId := k.getNextSellerIdAndIncrement(ctx)
	seller := NewSeller(sellerId, msg.Name, msg.ContactInfo, msg.Creator)

	member, _ := k.GetMember(ctx, msg.Creator)
	err = member.AddSeller(sellerId)
	if err != nil {
		return 0, err
	}

	k.SetMember(ctx, member)
	k.SetSeller(ctx, seller)
	return sellerId, nil
}
