package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/escrow/types"
)

func (k msgServer) BeginEscrow(goCtx context.Context, msg *types.MsgBeginEscrow) (*types.MsgBeginEscrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBeginEscrowResponse{}, nil
}
