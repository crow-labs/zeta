package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRaiseBuyerDispute = "raise_buyer_dispute"

var _ sdk.Msg = &MsgRaiseBuyerDispute{}

func NewMsgRaiseBuyerDispute(creator string, crowId uint64, buyerId uint64, title string, description string, externalLink string, votes []uint64) *MsgRaiseBuyerDispute {
	return &MsgRaiseBuyerDispute{
		Creator:      creator,
		CrowId:       crowId,
		BuyerId:      buyerId,
		Title:        title,
		Description:  description,
		ExternalLink: externalLink,
		Votes:        votes,
	}
}

func (msg *MsgRaiseBuyerDispute) Route() string {
	return RouterKey
}

func (msg *MsgRaiseBuyerDispute) Type() string {
	return TypeMsgRaiseBuyerDispute
}

func (msg *MsgRaiseBuyerDispute) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRaiseBuyerDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRaiseBuyerDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
