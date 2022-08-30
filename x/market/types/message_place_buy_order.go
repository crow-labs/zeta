package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPlaceBuyOrder = "place_buy_order"

var _ sdk.Msg = &MsgPlaceBuyOrder{}

func NewMsgPlaceBuyOrder(creator string, sellOrderId uint64, buyerId uint64, price sdk.Coin, collateral sdk.Coin) *MsgPlaceBuyOrder {
	return &MsgPlaceBuyOrder{
		Creator:     creator,
		SellOrderId: sellOrderId,
		BuyerId:     buyerId,
		Price:       price,
		Collateral:  collateral,
	}
}

func (msg *MsgPlaceBuyOrder) Route() string {
	return RouterKey
}

func (msg *MsgPlaceBuyOrder) Type() string {
	return TypeMsgPlaceBuyOrder
}

func (msg *MsgPlaceBuyOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPlaceBuyOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPlaceBuyOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
