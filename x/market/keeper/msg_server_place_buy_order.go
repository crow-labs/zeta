package keeper

import (
	"context"

	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PlaceBuyOrder(goCtx context.Context, msg *types.MsgPlaceBuyOrder) (*types.MsgPlaceBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyOrderId, err := k.CreateBuyOrder(ctx, *msg)
	if err != nil {
		return &types.MsgPlaceBuyOrderResponse{BuyOrderId: 0}, err
	}

	return &types.MsgPlaceBuyOrderResponse{BuyOrderId: buyOrderId}, nil
}
