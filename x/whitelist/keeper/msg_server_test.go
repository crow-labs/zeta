package keeper_test

import (
	"context"
	"testing"

	keepertest "zeta/testutil/keeper"
	"zeta/x/whitelist/keeper"
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.WhitelistKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
