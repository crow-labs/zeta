package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgVoterApplication = "voter_application"

var _ sdk.Msg = &MsgVoterApplication{}

func NewMsgVoterApplication(creator string, alias string) *MsgVoterApplication {
	return &MsgVoterApplication{
		Creator: creator,
		Alias:   alias,
	}
}

func (msg *MsgVoterApplication) Route() string {
	return RouterKey
}

func (msg *MsgVoterApplication) Type() string {
	return TypeMsgVoterApplication
}

func (msg *MsgVoterApplication) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgVoterApplication) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgVoterApplication) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
