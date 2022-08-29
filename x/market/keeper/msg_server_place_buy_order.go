package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/market/types"
)

func (k msgServer) PlaceBuyOrder(goCtx context.Context, msg *types.MsgPlaceBuyOrder) (*types.MsgPlaceBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPlaceBuyOrderResponse{}, nil
}
