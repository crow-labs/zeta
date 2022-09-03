package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/whitelist module sentinel errors
var (
	ErrAlreadyMember  = sdkerrors.Register(ModuleName, 1001, "member already exists for message creator (%s)")
	ErrMemberNotFound = sdkerrors.Register(ModuleName, 1002, "member not found for message creator (%s)")
	ErrAlreadyBuyer   = sdkerrors.Register(ModuleName, 1003, "buyerId: %s already exists for member")
	ErrAlreadySeller  = sdkerrors.Register(ModuleName, 1004, "sellerId: %s already exists for member")
	ErrAlreadyVoter   = sdkerrors.Register(ModuleName, 1005, "voterId: %s already exists for member")
	ErrSellerNotFound = sdkerrors.Register(ModuleName, 1006, "No seller found for sellerId: %s")
	ErrBuyerNotFound  = sdkerrors.Register(ModuleName, 1007, "No buyer found for buyerId: %s")
	ErrItemNotFound   = sdkerrors.Register(ModuleName, 1008, "No item found for itemId: %s")
	ErrVoterNotFound  = sdkerrors.Register(ModuleName, 1009, "No voter found for voterid")
	ErrVoterIsBuyer   = sdkerrors.Register(ModuleName, 1010, "Voter can't be crow buyer")
	ErrVoterIsSeller  = sdkerrors.Register(ModuleName, 1011, "Voter can't be the seller")
)
