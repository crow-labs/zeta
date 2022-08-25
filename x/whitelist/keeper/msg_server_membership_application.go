package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/whitelist/types"
)

func (k msgServer) MembershipApplication(goCtx context.Context, msg *types.MsgMembershipApplication) (*types.MsgMembershipApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMembershipApplicationResponse{}, nil
}
