package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "zeta/testutil/keeper"
	"zeta/x/market/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MarketKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
