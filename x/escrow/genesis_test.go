package escrow_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/escrow"
	"zeta/x/escrow/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CrowList: []types.Crow{
			{
				CrowId: 0,
			},
			{
				CrowId: 1,
			},
		},
		DisputeList: []types.Dispute{
			{
				DisputeId: 0,
			},
			{
				DisputeId: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EscrowKeeper(t)
	escrow.InitGenesis(ctx, *k, genesisState)
	got := escrow.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CrowList, got.CrowList)
	require.ElementsMatch(t, genesisState.DisputeList, got.DisputeList)
	// this line is used by starport scaffolding # genesis/test/assert
}
