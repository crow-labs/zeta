package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPrepareItem = "prepare_item"

var _ sdk.Msg = &MsgPrepareItem{}

func NewMsgPrepareItem(creator string, title string, desciption string, externalLink string, sellerId uint64) *MsgPrepareItem {
	return &MsgPrepareItem{
		Creator:      creator,
		Title:        title,
		Desciption:   desciption,
		ExternalLink: externalLink,
		SellerId:     sellerId,
	}
}

func (msg *MsgPrepareItem) Route() string {
	return RouterKey
}

func (msg *MsgPrepareItem) Type() string {
	return TypeMsgPrepareItem
}

func (msg *MsgPrepareItem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPrepareItem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPrepareItem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
