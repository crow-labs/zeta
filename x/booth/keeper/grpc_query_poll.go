package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"zeta/x/booth/types"
)

func (k Keeper) PollAll(c context.Context, req *types.QueryAllPollRequest) (*types.QueryAllPollResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var polls []types.Poll
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	pollStore := prefix.NewStore(store, types.KeyPrefix(types.PollKeyPrefix))

	pageRes, err := query.Paginate(pollStore, req.Pagination, func(key []byte, value []byte) error {
		var poll types.Poll
		if err := k.cdc.Unmarshal(value, &poll); err != nil {
			return err
		}

		polls = append(polls, poll)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPollResponse{Poll: polls, Pagination: pageRes}, nil
}

func (k Keeper) Poll(c context.Context, req *types.QueryGetPollRequest) (*types.QueryGetPollResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPoll(
		ctx,
		req.PollId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPollResponse{Poll: val}, nil
}
