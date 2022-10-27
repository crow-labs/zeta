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

func createNMember(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Member {
	items := make([]types.Member, n)
	for i := range items {
		items[i].BaseAddr = strconv.Itoa(i)

		keeper.SetMember(ctx, items[i])
	}
	return items
}

func TestMemberGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNMember(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMember(ctx,
			item.BaseAddr,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMemberRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNMember(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMember(ctx,
			item.BaseAddr,
		)
		_, found := keeper.GetMember(ctx,
			item.BaseAddr,
		)
		require.False(t, found)
	}
}

func TestMemberGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNMember(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMember(ctx)),
	)
}
