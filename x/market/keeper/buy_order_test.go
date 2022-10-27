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

func createNBuyOrder(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BuyOrder {
	items := make([]types.BuyOrder, n)
	for i := range items {
		items[i].BuyOrderId = uint64(i)

		keeper.SetBuyOrder(ctx, items[i])
	}
	return items
}

func TestBuyOrderGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNBuyOrder(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyOrder(ctx,
			item.BuyOrderId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyOrderRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNBuyOrder(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyOrder(ctx,
			item.BuyOrderId,
		)
		_, found := keeper.GetBuyOrder(ctx,
			item.BuyOrderId,
		)
		require.False(t, found)
	}
}

func TestBuyOrderGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNBuyOrder(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyOrder(ctx)),
	)
}
