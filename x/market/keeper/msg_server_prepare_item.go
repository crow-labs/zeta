package keeper

import (
	"context"

	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PrepareItem(goCtx context.Context, msg *types.MsgPrepareItem) (*types.MsgPrepareItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	itemId, err := k.CreateItem(ctx, *msg)
	if err != nil {
		return &types.MsgPrepareItemResponse{ItemId: 0}, err
	}

	return &types.MsgPrepareItemResponse{ItemId: itemId}, nil
}
