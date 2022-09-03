package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBeginPoll = "begin_poll"

var _ sdk.Msg = &MsgBeginPoll{}

func NewMsgBeginPoll(creator string, disputeId uint64) *MsgBeginPoll {
	return &MsgBeginPoll{
		Creator:   creator,
		DisputeId: disputeId,
	}
}

func (msg *MsgBeginPoll) Route() string {
	return RouterKey
}

func (msg *MsgBeginPoll) Type() string {
	return TypeMsgBeginPoll
}

func (msg *MsgBeginPoll) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBeginPoll) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBeginPoll) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
