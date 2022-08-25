package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/whitelist/types"
)

func (k msgServer) SellerApplication(goCtx context.Context, msg *types.MsgSellerApplication) (*types.MsgSellerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSellerApplicationResponse{}, nil
}
