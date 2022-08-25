package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/market module sentinel errors
var (
	ErrSample                 = sdkerrors.Register(ModuleName, 2001, "sample error")
	ErrInvalidPacketTimeout   = sdkerrors.Register(ModuleName, 2002, "invalid packet timeout")
	ErrInvalidVersion         = sdkerrors.Register(ModuleName, 2003, "invalid version")
	ErrInvalidSellerIdForAddr = sdkerrors.Register(ModuleName, 2004, "Seller Id not registered to msg creator")
	ErrItemNotFound           = sdkerrors.Register(ModuleName, 2005, "Item with itemId: %s not found")
)
