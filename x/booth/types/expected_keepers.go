package types

import (
	escrowTypes "zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

type EscrowKeeper interface {
	// Methods imported from escrow should be defined here
	GetDisputeFromDisputeId(ctx sdk.Context, disputeId uint64) (escrowTypes.Dispute, error)
	FundPoll(ctx sdk.Context, crowId uint64, pollAccAddr sdk.AccAddress) (sdk.Coin, error)
}

type WhitelistKeeper interface {
	// Methods imported from whitelist should be defined here
	ValidateVoterNotBuyerOrSeller(ctx sdk.Context, voterId, buyerId, sellerId uint64) error
	GetAccAddrFromVoterId(ctx sdk.Context, voterId uint64) (string, error)
	GetAccAddrFromSellerId(ctx sdk.Context, sellerId uint64) (string, error)
	GetAccAddrFromBuyerId(ctx sdk.Context, buyerId uint64) (string, error)
}

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
	NewAccount(sdk.Context, authtypes.AccountI) authtypes.AccountI

	SetAccount(ctx sdk.Context, acc authtypes.AccountI)
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	SendCoinsFromModuleToAccount(ctx sdk.Context, senderModule string, recipientAddr sdk.AccAddress, amt sdk.Coins) error

	GetBalance(ctx sdk.Context, addr sdk.AccAddress, denom string) sdk.Coin
	MintCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
	BurnCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
	// Methods imported from bank should be defined here
}
