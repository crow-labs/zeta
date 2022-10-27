package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCompleteEscrowNoDispute = "complete_escrow_no_dispute"

var _ sdk.Msg = &MsgCompleteEscrowNoDispute{}

func NewMsgCompleteEscrowNoDispute(creator string, crowId uint64) *MsgCompleteEscrowNoDispute {
	return &MsgCompleteEscrowNoDispute{
		Creator: creator,
		CrowId:  crowId,
	}
}

func (msg *MsgCompleteEscrowNoDispute) Route() string {
	return RouterKey
}

func (msg *MsgCompleteEscrowNoDispute) Type() string {
	return TypeMsgCompleteEscrowNoDispute
}

func (msg *MsgCompleteEscrowNoDispute) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCompleteEscrowNoDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCompleteEscrowNoDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
