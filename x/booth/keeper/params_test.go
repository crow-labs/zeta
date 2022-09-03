package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "zeta/testutil/keeper"
	"zeta/x/booth/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BoothKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
