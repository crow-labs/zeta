package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/market/types"
)

// SetBuyOrder set a specific buyOrder in the store from its index
func (k Keeper) SetBuyOrder(ctx sdk.Context, buyOrder types.BuyOrder) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyOrderKeyPrefix))
	b := k.cdc.MustMarshal(&buyOrder)
	store.Set(types.BuyOrderKey(
		buyOrder.BuyOrderId,
	), b)
}

// GetBuyOrder returns a buyOrder from its index
func (k Keeper) GetBuyOrder(
	ctx sdk.Context,
	buyOrderId uint64,

) (val types.BuyOrder, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyOrderKeyPrefix))

	b := store.Get(types.BuyOrderKey(
		buyOrderId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyOrder removes a buyOrder from the store
func (k Keeper) RemoveBuyOrder(
	ctx sdk.Context,
	buyOrderId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyOrderKeyPrefix))
	store.Delete(types.BuyOrderKey(
		buyOrderId,
	))
}

// GetAllBuyOrder returns all buyOrder
func (k Keeper) GetAllBuyOrder(ctx sdk.Context) (list []types.BuyOrder) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyOrderKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BuyOrder
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
