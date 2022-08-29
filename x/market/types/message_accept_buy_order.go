package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAcceptBuyOrder = "accept_buy_order"

var _ sdk.Msg = &MsgAcceptBuyOrder{}

func NewMsgAcceptBuyOrder(creator string, buyOrderId uint64, sellerId uint64) *MsgAcceptBuyOrder {
	return &MsgAcceptBuyOrder{
		Creator:    creator,
		BuyOrderId: buyOrderId,
		SellerId:   sellerId,
	}
}

func (msg *MsgAcceptBuyOrder) Route() string {
	return RouterKey
}

func (msg *MsgAcceptBuyOrder) Type() string {
	return TypeMsgAcceptBuyOrder
}

func (msg *MsgAcceptBuyOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAcceptBuyOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAcceptBuyOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
