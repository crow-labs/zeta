package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) BeginEscrow(goCtx context.Context, msg *types.MsgBeginEscrow) (*types.MsgBeginEscrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	crowId, err := k.CreateCrow(ctx, *msg)
	if err != nil {
		return &types.MsgBeginEscrowResponse{CrowId: 0}, err
	}

	return &types.MsgBeginEscrowResponse{CrowId: crowId}, nil
}
