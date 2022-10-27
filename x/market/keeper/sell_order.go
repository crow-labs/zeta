package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	gogotypes "github.com/gogo/protobuf/types"

	"zeta/x/market/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetSellOrder set a specific sellOrder in the store from its index
func (k Keeper) SetSellOrder(ctx sdk.Context, sellOrder types.SellOrder) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellOrderKeyPrefix))
	b := k.cdc.MustMarshal(&sellOrder)
	store.Set(types.SellOrderKey(
		sellOrder.SellOrderId,
	), b)
}

// GetSellOrder returns a sellOrder from its index
func (k Keeper) GetSellOrder(
	ctx sdk.Context,
	sellOrderId uint64,

) (val types.SellOrder, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellOrderKeyPrefix))

	b := store.Get(types.SellOrderKey(
		sellOrderId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSellOrder removes a sellOrder from the store
func (k Keeper) RemoveSellOrder(
	ctx sdk.Context,
	sellOrderId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellOrderKeyPrefix))
	store.Delete(types.SellOrderKey(
		sellOrderId,
	))
}

// GetAllSellOrder returns all sellOrder
func (k Keeper) GetAllSellOrder(ctx sdk.Context) (list []types.SellOrder) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellOrderKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SellOrder
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextSellOrderId(ctx sdk.Context, sellOrderId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: sellOrderId})
	store.Set(types.KeyNextGlobalSellOrderId, bz)
}

func (k Keeper) GetNextSellOrderId(ctx sdk.Context) uint64 {
	var nextSellOrderId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalSellOrderId)
	if bz == nil {
		panic(fmt.Errorf("sell order has not been initialized -- should have been done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextSellOrderId = val.GetValue()
	}

	return nextSellOrderId
}

func (k Keeper) getNextSellOrderIdAndIncrement(ctx sdk.Context) uint64 {
	nextSellOrderId := k.GetNextSellOrderId(ctx)
	k.SetNextSellOrderId(ctx, nextSellOrderId+1)
	return nextSellOrderId
}
