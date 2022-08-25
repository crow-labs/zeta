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

func (k Keeper) MemberAll(c context.Context, req *types.QueryAllMemberRequest) (*types.QueryAllMemberResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var members []types.Member
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	memberStore := prefix.NewStore(store, types.KeyPrefix(types.MemberKeyPrefix))

	pageRes, err := query.Paginate(memberStore, req.Pagination, func(key []byte, value []byte) error {
		var member types.Member
		if err := k.cdc.Unmarshal(value, &member); err != nil {
			return err
		}

		members = append(members, member)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMemberResponse{Member: members, Pagination: pageRes}, nil
}

func (k Keeper) Member(c context.Context, req *types.QueryGetMemberRequest) (*types.QueryGetMemberResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMember(
		ctx,
		req.BaseAddr,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMemberResponse{Member: val}, nil
}
