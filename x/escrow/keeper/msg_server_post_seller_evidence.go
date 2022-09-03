package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PostSellerEvidence(goCtx context.Context, msg *types.MsgPostSellerEvidence) (*types.MsgPostSellerEvidenceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPostSellerEvidenceResponse{}, nil
}
