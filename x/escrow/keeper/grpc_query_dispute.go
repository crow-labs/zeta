package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"zeta/x/escrow/types"
)

func (k Keeper) DisputeAll(c context.Context, req *types.QueryAllDisputeRequest) (*types.QueryAllDisputeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var disputes []types.Dispute
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	disputeStore := prefix.NewStore(store, types.KeyPrefix(types.DisputeKeyPrefix))

	pageRes, err := query.Paginate(disputeStore, req.Pagination, func(key []byte, value []byte) error {
		var dispute types.Dispute
		if err := k.cdc.Unmarshal(value, &dispute); err != nil {
			return err
		}

		disputes = append(disputes, dispute)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDisputeResponse{Dispute: disputes, Pagination: pageRes}, nil
}

func (k Keeper) Dispute(c context.Context, req *types.QueryGetDisputeRequest) (*types.QueryGetDisputeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetDispute(
		ctx,
		req.DisputeId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetDisputeResponse{Dispute: val}, nil
}
