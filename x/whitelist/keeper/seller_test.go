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

func createNSeller(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Seller {
	items := make([]types.Seller, n)
	for i := range items {
		items[i].SellerId = uint64(i)

		keeper.SetSeller(ctx, items[i])
	}
	return items
}

func TestSellerGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNSeller(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSeller(ctx,
			item.SellerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSellerRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNSeller(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSeller(ctx,
			item.SellerId,
		)
		_, found := keeper.GetSeller(ctx,
			item.SellerId,
		)
		require.False(t, found)
	}
}

func TestSellerGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNSeller(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSeller(ctx)),
	)
}
