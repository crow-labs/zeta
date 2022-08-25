package keeper

import (
	"context"

	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MembershipApplication(goCtx context.Context, msg *types.MsgMembershipApplication) (*types.MsgMembershipApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.CreateMember(ctx, *msg)
	if err != nil {
		return &types.MsgMembershipApplicationResponse{Joined: false}, err
	}

	return &types.MsgMembershipApplicationResponse{}, nil
}
