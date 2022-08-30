package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CompleteEscrowNoDispute(goCtx context.Context, msg *types.MsgCompleteEscrowNoDispute) (*types.MsgCompleteEscrowNoDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.CompleteCrowNoDispute(ctx, *msg)
	if err != nil {
		return &types.MsgCompleteEscrowNoDisputeResponse{}, err
	}

	return &types.MsgCompleteEscrowNoDisputeResponse{}, nil
}
