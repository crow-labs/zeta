package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/whitelist/types"
)

func (k msgServer) BuyerApplication(goCtx context.Context, msg *types.MsgBuyerApplication) (*types.MsgBuyerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBuyerApplicationResponse{}, nil
}
