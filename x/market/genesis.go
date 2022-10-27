package market

import (
	"zeta/x/market/keeper"
	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the item
	for _, elem := range genState.ItemList {
		k.SetItem(ctx, elem)
	}
	// Set all the sellOrder
	for _, elem := range genState.SellOrderList {
		k.SetSellOrder(ctx, elem)
	}
	// Set all the buyOrder
	for _, elem := range genState.BuyOrderList {
		k.SetBuyOrder(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
	k.SetNextItemId(ctx, genState.NextItemId)
	k.SetNextSellOrderId(ctx, genState.NextSellOrderId)
	k.SetNextBuyOrderId(ctx, genState.NextBuyOrderId)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.ItemList = k.GetAllItem(ctx)
	genesis.SellOrderList = k.GetAllSellOrder(ctx)
	genesis.BuyOrderList = k.GetAllBuyOrder(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	genesis.NextItemId = k.GetNextItemId(ctx)
	genesis.NextSellOrderId = k.GetNextSellOrderId(ctx)
	genesis.NextBuyOrderId = k.GetNextBuyOrderId(ctx)
	return genesis
}
