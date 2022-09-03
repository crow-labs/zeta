package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/booth/types"
)

func (k msgServer) RedeemPollShares(goCtx context.Context, msg *types.MsgRedeemPollShares) (*types.MsgRedeemPollSharesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRedeemPollSharesResponse{}, nil
}
