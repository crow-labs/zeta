package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) JoinEscrow(goCtx context.Context, msg *types.MsgJoinEscrow) (*types.MsgJoinEscrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.JoinCrow(ctx, *msg)
	if err != nil {
		return &types.MsgJoinEscrowResponse{}, err
	}

	return &types.MsgJoinEscrowResponse{}, nil
}
