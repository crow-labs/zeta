package keeper

import (
	"context"

	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) VoterApplication(goCtx context.Context, msg *types.MsgVoterApplication) (*types.MsgVoterApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	voterId, err := k.CreateVoter(ctx, *msg)
	if err != nil {
		return &types.MsgVoterApplicationResponse{VoterId: 0}, err
	}

	return &types.MsgVoterApplicationResponse{VoterId: voterId}, nil
}
