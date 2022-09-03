package keeper

import (
	"context"

	"zeta/x/booth/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) BeginPoll(goCtx context.Context, msg *types.MsgBeginPoll) (*types.MsgBeginPollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pollId, err := k.CreatePoll(ctx, *msg)
	if err != nil {
		return &types.MsgBeginPollResponse{PollId: 0}, err
	}

	return &types.MsgBeginPollResponse{PollId: pollId}, nil
}
