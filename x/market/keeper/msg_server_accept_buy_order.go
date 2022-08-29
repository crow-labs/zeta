package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/market/types"
)

func (k msgServer) AcceptBuyOrder(goCtx context.Context, msg *types.MsgAcceptBuyOrder) (*types.MsgAcceptBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAcceptBuyOrderResponse{}, nil
}
