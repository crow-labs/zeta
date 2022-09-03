package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddBuyerEvidence = "add_buyer_evidence"

var _ sdk.Msg = &MsgAddBuyerEvidence{}

func NewMsgAddBuyerEvidence(creator string, crowId uint64, disputeId uint64, description string, evidence string) *MsgAddBuyerEvidence {
	return &MsgAddBuyerEvidence{
		Creator:     creator,
		CrowId:      crowId,
		DisputeId:   disputeId,
		Description: description,
		Evidence:    evidence,
	}
}

func (msg *MsgAddBuyerEvidence) Route() string {
	return RouterKey
}

func (msg *MsgAddBuyerEvidence) Type() string {
	return TypeMsgAddBuyerEvidence
}

func (msg *MsgAddBuyerEvidence) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddBuyerEvidence) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddBuyerEvidence) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
