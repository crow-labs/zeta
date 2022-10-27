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

func (k Keeper) BuyerAll(c context.Context, req *types.QueryAllBuyerRequest) (*types.QueryAllBuyerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyers []types.Buyer
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buyerStore := prefix.NewStore(store, types.KeyPrefix(types.BuyerKeyPrefix))

	pageRes, err := query.Paginate(buyerStore, req.Pagination, func(key []byte, value []byte) error {
		var buyer types.Buyer
		if err := k.cdc.Unmarshal(value, &buyer); err != nil {
			return err
		}

		buyers = append(buyers, buyer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyerResponse{Buyer: buyers, Pagination: pageRes}, nil
}

func (k Keeper) Buyer(c context.Context, req *types.QueryGetBuyerRequest) (*types.QueryGetBuyerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuyer(
		ctx,
		req.BuyerId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyerResponse{Buyer: val}, nil
}
