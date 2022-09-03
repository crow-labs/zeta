package keeper

import (
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) validateMembershipApplicationMsg(ctx sdk.Context, msg types.MsgMembershipApplication) error {
	err := msg.ValidateBasic()
	if err != nil {
		return err
	}

	if _, found := k.GetMember(ctx, msg.Creator); found {
		return sdkerrors.Wrapf(types.ErrAlreadyMember, msg.Creator)
	}

	return nil
}

func NewMember(baseAddr, name string) types.Member {
	member := &types.Member{
		BaseAddr: baseAddr,
		Name:     name,
		BuyerId:  0,
		SellerId: 0,
		VoterId:  0,
	}

	return *member
}

func (k Keeper) CreateMember(ctx sdk.Context, msg types.MsgMembershipApplication) error {
	if err := k.validateMembershipApplicationMsg(ctx, msg); err != nil {
		return err
	}

	member := NewMember(msg.Creator, msg.Name)

	k.SetMember(ctx, member)
	return nil
}

func (k Keeper) ValidateVoterNotBuyerOrSeller(ctx sdk.Context, voterId, buyerId, sellerId uint64) error {
	voter, found := k.GetVoter(ctx, voterId)
	if !found {
		return types.ErrVoterNotFound
	}

	buyer, found := k.GetBuyer(ctx, buyerId)
	if !found {
		return types.ErrBuyerNotFound
	}

	seller, found := k.GetSeller(ctx, sellerId)
	if !found {
		return types.ErrSellerNotFound
	}

	if voter.GetAddress() == buyer.GetAddress() {
		return types.ErrVoterIsBuyer
	}

	if voter.GetAddress() == seller.GetAddress() {
		return types.ErrVoterIsSeller
	}

	return nil
}
