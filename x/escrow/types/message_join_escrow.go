package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgJoinEscrow = "join_escrow"

var _ sdk.Msg = &MsgJoinEscrow{}

func NewMsgJoinEscrow(creator string, crowId uint64) *MsgJoinEscrow {
	return &MsgJoinEscrow{
		Creator: creator,
		CrowId:  crowId,
	}
}

func (msg *MsgJoinEscrow) Route() string {
	return RouterKey
}

func (msg *MsgJoinEscrow) Type() string {
	return TypeMsgJoinEscrow
}

func (msg *MsgJoinEscrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgJoinEscrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgJoinEscrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
