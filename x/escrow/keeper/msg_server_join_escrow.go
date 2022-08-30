package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/escrow/types"
)

func (k msgServer) JoinEscrow(goCtx context.Context, msg *types.MsgJoinEscrow) (*types.MsgJoinEscrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgJoinEscrowResponse{}, nil
}
