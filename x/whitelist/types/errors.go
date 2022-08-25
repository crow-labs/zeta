package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/whitelist module sentinel errors
var (
	ErrAlreadyMember  = sdkerrors.Register(ModuleName, 1, "member already exists for message creator (%s)")
	ErrMemberNotFound = sdkerrors.Register(ModuleName, 2, "member not found for message creator (%s)")
	ErrAlreadyBuyer   = sdkerrors.Register(ModuleName, 3, "buyerId: %s already exists for member")
	ErrSample         = sdkerrors.Register(ModuleName, 1100, "sample error")
)
