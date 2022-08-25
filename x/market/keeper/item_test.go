package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/market/keeper"
	"zeta/x/market/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNItem(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Item {
	items := make([]types.Item, n)
	for i := range items {
		items[i].ItemId = uint64(i)

		keeper.SetItem(ctx, items[i])
	}
	return items
}

func TestItemGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNItem(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetItem(ctx,
			item.ItemId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestItemRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNItem(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveItem(ctx,
			item.ItemId,
		)
		_, found := keeper.GetItem(ctx,
			item.ItemId,
		)
		require.False(t, found)
	}
}

func TestItemGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNItem(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllItem(ctx)),
	)
}
