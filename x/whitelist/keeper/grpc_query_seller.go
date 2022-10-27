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

func (k Keeper) SellerAll(c context.Context, req *types.QueryAllSellerRequest) (*types.QueryAllSellerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sellers []types.Seller
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sellerStore := prefix.NewStore(store, types.KeyPrefix(types.SellerKeyPrefix))

	pageRes, err := query.Paginate(sellerStore, req.Pagination, func(key []byte, value []byte) error {
		var seller types.Seller
		if err := k.cdc.Unmarshal(value, &seller); err != nil {
			return err
		}

		sellers = append(sellers, seller)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSellerResponse{Seller: sellers, Pagination: pageRes}, nil
}

func (k Keeper) Seller(c context.Context, req *types.QueryGetSellerRequest) (*types.QueryGetSellerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSeller(
		ctx,
		req.SellerId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSellerResponse{Seller: val}, nil
}
