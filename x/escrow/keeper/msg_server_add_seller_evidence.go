package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AddSellerEvidence(goCtx context.Context, msg *types.MsgAddSellerEvidence) (*types.MsgAddSellerEvidenceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.AddSellerEvidenceToDispute(ctx, *msg)
	if err != nil {
		return &types.MsgAddSellerEvidenceResponse{}, err
	}

	return &types.MsgAddSellerEvidenceResponse{}, nil
}
