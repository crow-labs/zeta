package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPostSellerEvidence = "post_seller_evidence"

var _ sdk.Msg = &MsgPostSellerEvidence{}

func NewMsgPostSellerEvidence(creator string, crowId uint64, disputeId uint64, description string, evidence string) *MsgPostSellerEvidence {
	return &MsgPostSellerEvidence{
		Creator:     creator,
		CrowId:      crowId,
		DisputeId:   disputeId,
		Description: description,
		Evidence:    evidence,
	}
}

func (msg *MsgPostSellerEvidence) Route() string {
	return RouterKey
}

func (msg *MsgPostSellerEvidence) Type() string {
	return TypeMsgPostSellerEvidence
}

func (msg *MsgPostSellerEvidence) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPostSellerEvidence) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPostSellerEvidence) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
