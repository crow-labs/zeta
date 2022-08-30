package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/escrow/types"
)

func (k msgServer) CompleteEscrowNoDispute(goCtx context.Context, msg *types.MsgCompleteEscrowNoDispute) (*types.MsgCompleteEscrowNoDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCompleteEscrowNoDisputeResponse{}, nil
}
