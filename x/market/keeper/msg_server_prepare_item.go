package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/market/types"
)

func (k msgServer) PrepareItem(goCtx context.Context, msg *types.MsgPrepareItem) (*types.MsgPrepareItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPrepareItemResponse{}, nil
}
