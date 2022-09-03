package booth_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/booth"
	"zeta/x/booth/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		VoteList: []types.Vote{
			{
				VoteId: 0,
			},
			{
				VoteId: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BoothKeeper(t)
	booth.InitGenesis(ctx, *k, genesisState)
	got := booth.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.VoteList, got.VoteList)
	// this line is used by starport scaffolding # genesis/test/assert
}
