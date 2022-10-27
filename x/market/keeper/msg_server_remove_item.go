package keeper

import (
	"context"

	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RemoveItem(goCtx context.Context, msg *types.MsgRemoveItem) (*types.MsgRemoveItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.DeleteItem(ctx, *msg)
	if err != nil {
		return &types.MsgRemoveItemResponse{}, err
	}

	return &types.MsgRemoveItemResponse{}, nil
}
