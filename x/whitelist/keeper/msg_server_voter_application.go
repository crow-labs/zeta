package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/whitelist/types"
)

func (k msgServer) VoterApplication(goCtx context.Context, msg *types.MsgVoterApplication) (*types.MsgVoterApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgVoterApplicationResponse{}, nil
}
