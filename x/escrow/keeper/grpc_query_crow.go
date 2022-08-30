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

func (k Keeper) CrowAll(c context.Context, req *types.QueryAllCrowRequest) (*types.QueryAllCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var crows []types.Crow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	crowStore := prefix.NewStore(store, types.KeyPrefix(types.CrowKeyPrefix))

	pageRes, err := query.Paginate(crowStore, req.Pagination, func(key []byte, value []byte) error {
		var crow types.Crow
		if err := k.cdc.Unmarshal(value, &crow); err != nil {
			return err
		}

		crows = append(crows, crow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCrowResponse{Crow: crows, Pagination: pageRes}, nil
}

func (k Keeper) Crow(c context.Context, req *types.QueryGetCrowRequest) (*types.QueryGetCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCrow(
		ctx,
		req.CrowId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCrowResponse{Crow: val}, nil
}
