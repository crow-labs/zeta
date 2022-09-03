package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

type MarketKeeper interface {
	// Methods imported from market should be defined here
	UpdateOrdersStatus(ctx sdk.Context, crowId, bOrderId uint64, bOrderStatus, sOrderStatus string) error
	GetCollateralFromBuyOrderId(ctx sdk.Context, bOrderId uint64) (sdk.Coin, error)
	GetBuyerPaymentFromBuyOrderId(ctx sdk.Context, bOrderId uint64) (sdk.Coin, error)
	GetSellerAddrFromBuyOrderId(ctx sdk.Context, bOrderId uint64) (string, error)
	ValidateSellerInEscrow(ctx sdk.Context, buyOrderId uint64, creator string) error
	ValidateBuyerInEscrow(ctx sdk.Context, buyOrderId uint64, creator string) error
	GetBuyerAndSellerIdFromBuyOrder(ctx sdk.Context, buyOrderId uint64) (buyerId, sellerId uint64, err error)
}

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	SetAccount(ctx sdk.Context, acc authtypes.AccountI)
	// Methods imported from account should be defined here
	NewAccount(sdk.Context, authtypes.AccountI) authtypes.AccountI
	GetModuleAddress(moduleName string) sdk.AccAddress
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	HasBalance(ctx sdk.Context, addr sdk.AccAddress, amt sdk.Coin) bool
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
	SendCoinsFromModuleToAccount(ctx sdk.Context, senderModule string, recipientAddr sdk.AccAddress, amt sdk.Coins) error
	SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
	SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
}
