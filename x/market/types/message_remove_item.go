package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRemoveItem = "remove_item"

var _ sdk.Msg = &MsgRemoveItem{}

func NewMsgRemoveItem(creator string, itemId uint64, sellerId uint64) *MsgRemoveItem {
	return &MsgRemoveItem{
		Creator:  creator,
		ItemId:   itemId,
		SellerId: sellerId,
	}
}

func (msg *MsgRemoveItem) Route() string {
	return RouterKey
}

func (msg *MsgRemoveItem) Type() string {
	return TypeMsgRemoveItem
}

func (msg *MsgRemoveItem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveItem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveItem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
