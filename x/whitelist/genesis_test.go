package whitelist_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/whitelist"
	"zeta/x/whitelist/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MemberList: []types.Member{
			{
				BaseAddr: "0",
			},
			{
				BaseAddr: "1",
			},
		},
		BuyerList: []types.Buyer{
			{
				BuyerId: 0,
			},
			{
				BuyerId: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WhitelistKeeper(t)
	whitelist.InitGenesis(ctx, *k, genesisState)
	got := whitelist.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MemberList, got.MemberList)
	require.ElementsMatch(t, genesisState.BuyerList, got.BuyerList)
	// this line is used by starport scaffolding # genesis/test/assert
}
