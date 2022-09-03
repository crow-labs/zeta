package keeper

import (
	"context"

	"zeta/x/booth/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CastVoteForPoll(goCtx context.Context, msg *types.MsgCastVoteForPoll) (*types.MsgCastVoteForPollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	voteId, err := k.CreateVoteForPoll(ctx, *msg)
	if err != nil {
		return &types.MsgCastVoteForPollResponse{VoteId: 0}, err
	}

	return &types.MsgCastVoteForPollResponse{VoteId: voteId}, nil
}
