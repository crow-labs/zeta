package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRedeemPollShares = "redeem_poll_shares"

var _ sdk.Msg = &MsgRedeemPollShares{}

func NewMsgRedeemPollShares(creator string, pollId uint64, voterId uint64, pollShares sdk.Coin) *MsgRedeemPollShares {
	return &MsgRedeemPollShares{
		Creator:    creator,
		PollId:     pollId,
		VoterId:    voterId,
		PollShares: pollShares,
	}
}

func (msg *MsgRedeemPollShares) Route() string {
	return RouterKey
}

func (msg *MsgRedeemPollShares) Type() string {
	return TypeMsgRedeemPollShares
}

func (msg *MsgRedeemPollShares) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRedeemPollShares) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRedeemPollShares) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
