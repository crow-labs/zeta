package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/escrow module sentinel errors
var (
	ErrSample                  = sdkerrors.Register(ModuleName, 3100, "sample error")
	ErrCrowNotFound            = sdkerrors.Register(ModuleName, 3001, "crow not found")
	ErrSellerInsufficientFunds = sdkerrors.Register(ModuleName, 3002, "seller insufficient funds for escrow")
	ErrBuyerInsufficientFunds  = sdkerrors.Register(ModuleName, 3003, "buyer insufficient funds for escrow")
	ErrInvalidCrowStateForMsg  = sdkerrors.Register(ModuleName, 3004, "msg not applicable for current crow state")
	ErrDisputeNotFound         = sdkerrors.Register(ModuleName, 3005, "dispute not found")
	ErrCreatorNotPartOfDispute = sdkerrors.Register(ModuleName, 3006, "creator is not a part of the dispute")
)
