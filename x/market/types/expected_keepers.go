package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
)

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
}

type WhitelistKeeper interface {
	GetBuyerAddrFromId(ctx sdk.Context, buyerId uint64) (string, error)
	GetSellerAddrFromId(ctx sdk.Context, sellerId uint64) (string, error)
	AddItemToSeller(ctx sdk.Context, sellerId, itemId uint64) error
	RemoveItemFromSeller(ctx sdk.Context, sellerId, itemId uint64) error
	AddSellOrderToSeller(ctx sdk.Context, sellerId, sellOrderId uint64) error
	AddBuyOrderToBuyer(ctx sdk.Context, buyerId, orderId uint64) error
}
