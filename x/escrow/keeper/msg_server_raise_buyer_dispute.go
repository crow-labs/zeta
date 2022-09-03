package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RaiseBuyerDispute(goCtx context.Context, msg *types.MsgRaiseBuyerDispute) (*types.MsgRaiseBuyerDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	disputeId, err := k.CreateBuyerDispute(ctx, *msg)
	if err != nil {
		return &types.MsgRaiseBuyerDisputeResponse{DisputeId: 0}, err
	}

	return &types.MsgRaiseBuyerDisputeResponse{DisputeId: disputeId}, nil
}
