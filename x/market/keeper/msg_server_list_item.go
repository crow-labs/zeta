package keeper

import (
	"context"

	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ListItem(goCtx context.Context, msg *types.MsgListItem) (*types.MsgListItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sellOrderId, err := k.CreateSellOrder(ctx, *msg)
	if err != nil {
		return &types.MsgListItemResponse{SellOrderId: 0}, err
	}

	return &types.MsgListItemResponse{SellOrderId: sellOrderId}, nil
}
