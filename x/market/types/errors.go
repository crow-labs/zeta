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
	ErrInvalidBuyerIdForAddr  = sdkerrors.Register(ModuleName, 2006, "Buyer Id not registered to msg creator")
	ErrBuyerIsSeller          = sdkerrors.Register(ModuleName, 2007, "Buyer can't place an order for their own sell order")
	ErrSellOrderNotFound      = sdkerrors.Register(ModuleName, 2008, "Sell order with sell order Id: %s not found")
	ErrBuyOrderNotFound       = sdkerrors.Register(ModuleName, 2009, "Buy order with buy order id: %s  not found")
	ErrNotSellerForBuyOrder   = sdkerrors.Register(ModuleName, 2010, "Can't accept a buy order unless the seller of the sell order")
)
