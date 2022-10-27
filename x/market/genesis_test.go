package market_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/market"
	"zeta/x/market/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		ItemList: []types.Item{
			{
				ItemId: 0,
			},
			{
				ItemId: 1,
			},
		},
		SellOrderList: []types.SellOrder{
			{
				SellOrderId: 0,
			},
			{
				SellOrderId: 1,
			},
		},
		BuyOrderList: []types.BuyOrder{
			{
				BuyOrderId: 0,
			},
			{
				BuyOrderId: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarketKeeper(t)
	market.InitGenesis(ctx, *k, genesisState)
	got := market.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.ItemList, got.ItemList)
	require.ElementsMatch(t, genesisState.SellOrderList, got.SellOrderList)
	require.ElementsMatch(t, genesisState.BuyOrderList, got.BuyOrderList)
	// this line is used by starport scaffolding # genesis/test/assert
}
