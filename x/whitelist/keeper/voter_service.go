package keeper

import (
	"strconv"
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) validateVoterApplication(ctx sdk.Context, msg types.MsgVoterApplication) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	member, found := k.GetMember(ctx, msg.Creator)
	if !found {
		return sdkerrors.Wrapf(types.ErrMemberNotFound, msg.Creator)
	}

	if member.VoterId != 0 {
		return sdkerrors.Wrapf(types.ErrAlreadyVoter, strconv.FormatUint(member.VoterId, 10))
	}

	return nil
}

func NewVoter(voterId uint64, alias, address string) types.Voter {

	voter := &types.Voter{
		VoterId: voterId,
		Alias:   alias,
		Address: address,
	}

	return *voter
}

func (k Keeper) CreateVoter(ctx sdk.Context, msg types.MsgVoterApplication) (uint64, error) {
	err := k.validateVoterApplication(ctx, msg)
	if err != nil {
		return 0, err
	}

	voterId := k.getNextVoterIdAndIncrement(ctx)
	voter := NewVoter(voterId, msg.Alias, msg.Creator)

	member, _ := k.GetMember(ctx, msg.Creator)
	err = member.AddVoter(voterId)
	if err != nil {
		return 0, err
	}

	k.SetMember(ctx, member)
	k.SetVoter(ctx, voter)
	return voterId, nil
}
