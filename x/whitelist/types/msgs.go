package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgVoterApplication      = "voter_application"
	TypeMsgSellerApplication     = "seller_application"
	TypeMsgBuyerApplication      = "buyer_application"
	TypeMsgMembershipApplication = "membership_application"
)

var (
	_ sdk.Msg = &MsgVoterApplication{}
	_ sdk.Msg = &MsgSellerApplication{}
	_ sdk.Msg = &MsgBuyerApplication{}
	_ sdk.Msg = &MsgMembershipApplication{}
)

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

func NewMsgSellerApplication(creator string, contactInfo string, name string) *MsgSellerApplication {
	return &MsgSellerApplication{
		Creator:     creator,
		ContactInfo: contactInfo,
		Name:        name,
	}
}

func (msg *MsgSellerApplication) Route() string {
	return RouterKey
}

func (msg *MsgSellerApplication) Type() string {
	return TypeMsgSellerApplication
}

func (msg *MsgSellerApplication) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSellerApplication) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSellerApplication) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

func NewMsgBuyerApplication(creator string, contactInfo string) *MsgBuyerApplication {
	return &MsgBuyerApplication{
		Creator:     creator,
		ContactInfo: contactInfo,
	}
}

func (msg *MsgBuyerApplication) Route() string {
	return RouterKey
}

func (msg *MsgBuyerApplication) Type() string {
	return TypeMsgBuyerApplication
}

func (msg *MsgBuyerApplication) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyerApplication) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyerApplication) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

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
