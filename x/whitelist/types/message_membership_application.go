package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMembershipApplication = "membership_application"

var _ sdk.Msg = &MsgMembershipApplication{}

func NewMsgMembershipApplication(creator string, name string) *MsgMembershipApplication {
	return &MsgMembershipApplication{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgMembershipApplication) Route() string {
	return RouterKey
}

func (msg *MsgMembershipApplication) Type() string {
	return TypeMsgMembershipApplication
}

func (msg *MsgMembershipApplication) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMembershipApplication) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMembershipApplication) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
