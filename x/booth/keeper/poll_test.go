package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/booth/keeper"
	"zeta/x/booth/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNPoll(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Poll {
	items := make([]types.Poll, n)
	for i := range items {
		items[i].PollId = uint64(i)

		keeper.SetPoll(ctx, items[i])
	}
	return items
}

func TestPollGet(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPoll(ctx,
			item.PollId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPollRemove(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePoll(ctx,
			item.PollId,
		)
		_, found := keeper.GetPoll(ctx,
			item.PollId,
		)
		require.False(t, found)
	}
}

func TestPollGetAll(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPoll(ctx)),
	)
}
