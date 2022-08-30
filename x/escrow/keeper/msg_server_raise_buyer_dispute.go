package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/escrow/types"
)

func (k msgServer) RaiseBuyerDispute(goCtx context.Context, msg *types.MsgRaiseBuyerDispute) (*types.MsgRaiseBuyerDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRaiseBuyerDisputeResponse{}, nil
}
