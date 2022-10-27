package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"zeta/x/whitelist/types"
)

func (k Keeper) VoterAll(c context.Context, req *types.QueryAllVoterRequest) (*types.QueryAllVoterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var voters []types.Voter
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	voterStore := prefix.NewStore(store, types.KeyPrefix(types.VoterKeyPrefix))

	pageRes, err := query.Paginate(voterStore, req.Pagination, func(key []byte, value []byte) error {
		var voter types.Voter
		if err := k.cdc.Unmarshal(value, &voter); err != nil {
			return err
		}

		voters = append(voters, voter)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllVoterResponse{Voter: voters, Pagination: pageRes}, nil
}

func (k Keeper) Voter(c context.Context, req *types.QueryGetVoterRequest) (*types.QueryGetVoterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetVoter(
		ctx,
		req.VoterId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetVoterResponse{Voter: val}, nil
}
