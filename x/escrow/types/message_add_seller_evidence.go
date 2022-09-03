package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddSellerEvidence = "add_seller_evidence"

var _ sdk.Msg = &MsgAddSellerEvidence{}

func NewMsgAddSellerEvidence(creator string, crowId uint64, disputeId uint64, description string, evidence string) *MsgAddSellerEvidence {
	return &MsgAddSellerEvidence{
		Creator:     creator,
		CrowId:      crowId,
		DisputeId:   disputeId,
		Description: description,
		Evidence:    evidence,
	}
}

func (msg *MsgAddSellerEvidence) Route() string {
	return RouterKey
}

func (msg *MsgAddSellerEvidence) Type() string {
	return TypeMsgAddSellerEvidence
}

func (msg *MsgAddSellerEvidence) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddSellerEvidence) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddSellerEvidence) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
