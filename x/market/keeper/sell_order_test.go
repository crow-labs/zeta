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

func createNSellOrder(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SellOrder {
	items := make([]types.SellOrder, n)
	for i := range items {
		items[i].SellOrderId = uint64(i)

		keeper.SetSellOrder(ctx, items[i])
	}
	return items
}

func TestSellOrderGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNSellOrder(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSellOrder(ctx,
			item.SellOrderId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSellOrderRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNSellOrder(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSellOrder(ctx,
			item.SellOrderId,
		)
		_, found := keeper.GetSellOrder(ctx,
			item.SellOrderId,
		)
		require.False(t, found)
	}
}

func TestSellOrderGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNSellOrder(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSellOrder(ctx)),
	)
}
