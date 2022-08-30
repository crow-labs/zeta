package types

import (
	"testing"

	"zeta/testutil/sample"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgVoterApplication_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgVoterApplication
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgVoterApplication{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgVoterApplication{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgSellerApplication_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgSellerApplication
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgSellerApplication{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgSellerApplication{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgBuyerApplication_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgBuyerApplication
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgBuyerApplication{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgBuyerApplication{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgMembershipApplication_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgMembershipApplication
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgMembershipApplication{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgMembershipApplication{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
