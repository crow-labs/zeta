package keeper

import (
	"strconv"
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) validateBuyerApplication(ctx sdk.Context, msg types.MsgBuyerApplication) (string, error) {
	if err := msg.ValidateBasic(); err != nil {
		return "", err
	}

	member, found := k.GetMember(ctx, msg.Creator)
	if !found {
		return "", sdkerrors.Wrapf(types.ErrMemberNotFound, msg.Creator)
	}

	if member.BuyerId != 0 {
		return "", sdkerrors.Wrapf(types.ErrAlreadyBuyer, strconv.FormatUint(member.BuyerId, 10))
	}

	return member.Name, nil
}

func NewBuyer(buyerId uint64, name, contactInfo, address string) types.Buyer {

	buyer := &types.Buyer{
		BuyerId:     buyerId,
		Name:        name,
		ContactInfo: contactInfo,
		Address:     address,
		Status:      "whitelisted", // TODO: make this a const string
	}

	return *buyer
}

func (k Keeper) CreateBuyer(ctx sdk.Context, msg types.MsgBuyerApplication) (uint64, error) {
	name, err := k.validateBuyerApplication(ctx, msg)
	if err != nil {
		return 0, err
	}

	buyerId := k.getNextBuyerIdAndIncrement(ctx)
	buyer := NewBuyer(buyerId, name, msg.ContactInfo, msg.Creator)

	k.SetBuyer(ctx, buyer)
	return buyerId, nil
}
