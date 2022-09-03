package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/booth/types"
)

func (k msgServer) BeginPoll(goCtx context.Context, msg *types.MsgBeginPoll) (*types.MsgBeginPollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBeginPollResponse{}, nil
}
