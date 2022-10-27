package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBeginEscrow = "begin_escrow"

var _ sdk.Msg = &MsgBeginEscrow{}

func NewMsgBeginEscrow(creator string, buyOrderId uint64) *MsgBeginEscrow {
	return &MsgBeginEscrow{
		Creator:    creator,
		BuyOrderId: buyOrderId,
	}
}

func (msg *MsgBeginEscrow) Route() string {
	return RouterKey
}

func (msg *MsgBeginEscrow) Type() string {
	return TypeMsgBeginEscrow
}

func (msg *MsgBeginEscrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBeginEscrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBeginEscrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
