package keeper

import (
	"context"

	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) BuyerApplication(goCtx context.Context, msg *types.MsgBuyerApplication) (*types.MsgBuyerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyerId, err := k.CreateBuyer(ctx, *msg)
	if err != nil {
		return &types.MsgBuyerApplicationResponse{BuyerId: buyerId}, err
	}

	return &types.MsgBuyerApplicationResponse{BuyerId: buyerId}, nil
}
