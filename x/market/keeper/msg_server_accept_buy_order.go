package keeper

import (
	"context"

	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AcceptBuyOrder(goCtx context.Context, msg *types.MsgAcceptBuyOrder) (*types.MsgAcceptBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, err := k.AcceptBuyOrderAndEscrow(ctx, *msg)
	if err != nil {
		return &types.MsgAcceptBuyOrderResponse{}, err
	}

	return &types.MsgAcceptBuyOrderResponse{}, nil
}
