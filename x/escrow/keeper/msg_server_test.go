package keeper_test

import (
	"context"
	"testing"

	keepertest "zeta/testutil/keeper"
	"zeta/x/escrow/keeper"
	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.EscrowKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
