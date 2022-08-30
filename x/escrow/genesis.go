package escrow

import (
	"zeta/x/escrow/keeper"
	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the crow
	for _, elem := range genState.CrowList {
		k.SetCrow(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)

	k.SetNextCrowId(ctx, genState.NextCrowId)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CrowList = k.GetAllCrow(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	genesis.NextCrowId = k.GetNextCrowId(ctx)
	return genesis
}
