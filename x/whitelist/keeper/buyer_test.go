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

func createNBuyer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Buyer {
	items := make([]types.Buyer, n)
	for i := range items {
		items[i].BuyerId = uint64(i)

		keeper.SetBuyer(ctx, items[i])
	}
	return items
}

func TestBuyerGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyer(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyer(ctx,
			item.BuyerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyerRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyer(ctx,
			item.BuyerId,
		)
		_, found := keeper.GetBuyer(ctx,
			item.BuyerId,
		)
		require.False(t, found)
	}
}

func TestBuyerGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyer(ctx)),
	)
}
