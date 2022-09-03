package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCastVoteForPoll = "cast_vote_for_poll"

var _ sdk.Msg = &MsgCastVoteForPoll{}

func NewMsgCastVoteForPoll(creator string, pollId uint64, voterId uint64, ballot *VoteParams) *MsgCastVoteForPoll {
	return &MsgCastVoteForPoll{
		Creator: creator,
		PollId:  pollId,
		VoterId: voterId,
		Ballot:  ballot,
	}
}

func (msg *MsgCastVoteForPoll) Route() string {
	return RouterKey
}

func (msg *MsgCastVoteForPoll) Type() string {
	return TypeMsgCastVoteForPoll
}

func (msg *MsgCastVoteForPoll) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCastVoteForPoll) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCastVoteForPoll) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
