package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/whitelist/keeper"
	"zeta/x/whitelist/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNVoter(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Voter {
	items := make([]types.Voter, n)
	for i := range items {
		items[i].VoterId = uint64(i)

		keeper.SetVoter(ctx, items[i])
	}
	return items
}

func TestVoterGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNVoter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetVoter(ctx,
			item.VoterId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestVoterRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNVoter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVoter(ctx,
			item.VoterId,
		)
		_, found := keeper.GetVoter(ctx,
			item.VoterId,
		)
		require.False(t, found)
	}
}

func TestVoterGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNVoter(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllVoter(ctx)),
	)
}
