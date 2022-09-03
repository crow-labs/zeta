package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/escrow/keeper"
	"zeta/x/escrow/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNDispute(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Dispute {
	items := make([]types.Dispute, n)
	for i := range items {
		items[i].DisputeId = uint64(i)

		keeper.SetDispute(ctx, items[i])
	}
	return items
}

func TestDisputeGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNDispute(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDispute(ctx,
			item.DisputeId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestDisputeRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNDispute(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDispute(ctx,
			item.DisputeId,
		)
		_, found := keeper.GetDispute(ctx,
			item.DisputeId,
		)
		require.False(t, found)
	}
}

func TestDisputeGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNDispute(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDispute(ctx)),
	)
}
