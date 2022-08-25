package keeper

import (
	"context"

	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SellerApplication(goCtx context.Context, msg *types.MsgSellerApplication) (*types.MsgSellerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sellerId, err := k.CreateSeller(ctx, *msg)
	if err != nil {
		return &types.MsgSellerApplicationResponse{SellerId: 0}, err
	}

	return &types.MsgSellerApplicationResponse{SellerId: sellerId}, nil
}
