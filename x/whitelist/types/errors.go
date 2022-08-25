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
	ErrAlreadySeller  = sdkerrors.Register(ModuleName, 4, "sellerId: %s already exists for member")
	ErrAlreadyVoter   = sdkerrors.Register(ModuleName, 5, "voterId: %s already exists for member")
	ErrSellerNotFound = sdkerrors.Register(ModuleName, 6, "No seller found for sellerId: %s")
	ErrBuyerNotFound  = sdkerrors.Register(ModuleName, 7, "No buyer found for buyerId: %s")
)
