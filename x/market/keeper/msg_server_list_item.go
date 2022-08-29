package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/market/types"
)

func (k msgServer) ListItem(goCtx context.Context, msg *types.MsgListItem) (*types.MsgListItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgListItemResponse{}, nil
}
