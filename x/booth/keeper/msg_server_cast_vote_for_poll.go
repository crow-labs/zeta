package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/booth/types"
)

func (k msgServer) CastVoteForPoll(goCtx context.Context, msg *types.MsgCastVoteForPoll) (*types.MsgCastVoteForPollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCastVoteForPollResponse{}, nil
}
