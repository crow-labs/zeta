package whitelist

import (
	"zeta/x/whitelist/keeper"
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the member
	for _, elem := range genState.MemberList {
		k.SetMember(ctx, elem)
	}
	// Set all the buyer
	for _, elem := range genState.BuyerList {
		k.SetBuyer(ctx, elem)
	}
	// Set all the seller
	for _, elem := range genState.SellerList {
		k.SetSeller(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
	k.SetNextBuyerId(ctx, genState.NextBuyerId)
	k.SetNextSellerId(ctx, genState.NextSellerId)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.MemberList = k.GetAllMember(ctx)
	genesis.BuyerList = k.GetAllBuyer(ctx)
	genesis.SellerList = k.GetAllSeller(ctx)
	// this line is used by starport scaffolding # genesis/module/export
	genesis.NextBuyerId = k.GetNextBuyerId(ctx)
	genesis.NextSellerId = k.GetNextSellerId(ctx)

	return genesis
}
