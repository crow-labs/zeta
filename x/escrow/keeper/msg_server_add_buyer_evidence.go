package keeper

import (
	"context"

	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AddBuyerEvidence(goCtx context.Context, msg *types.MsgAddBuyerEvidence) (*types.MsgAddBuyerEvidenceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.AddBuyerEvidenceToDispute(ctx, *msg)
	if err != nil {
		return &types.MsgAddBuyerEvidenceResponse{}, err
	}

	return &types.MsgAddBuyerEvidenceResponse{}, nil
}
