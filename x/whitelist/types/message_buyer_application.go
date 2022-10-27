package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyerApplication = "buyer_application"

var _ sdk.Msg = &MsgBuyerApplication{}

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
