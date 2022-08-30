package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"zeta/x/market/types"
)

func (k Keeper) BuyOrderAll(c context.Context, req *types.QueryAllBuyOrderRequest) (*types.QueryAllBuyOrderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyOrders []types.BuyOrder
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buyOrderStore := prefix.NewStore(store, types.KeyPrefix(types.BuyOrderKeyPrefix))

	pageRes, err := query.Paginate(buyOrderStore, req.Pagination, func(key []byte, value []byte) error {
		var buyOrder types.BuyOrder
		if err := k.cdc.Unmarshal(value, &buyOrder); err != nil {
			return err
		}

		buyOrders = append(buyOrders, buyOrder)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyOrderResponse{BuyOrder: buyOrders, Pagination: pageRes}, nil
}

func (k Keeper) BuyOrder(c context.Context, req *types.QueryGetBuyOrderRequest) (*types.QueryGetBuyOrderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuyOrder(
		ctx,
		req.BuyOrderId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyOrderResponse{BuyOrder: val}, nil
}
