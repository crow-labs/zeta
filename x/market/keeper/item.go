package keeper

import (
	"fmt"
	"zeta/x/market/types"

	gogotypes "github.com/gogo/protobuf/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetItem set a specific item in the store from its index
func (k Keeper) SetItem(ctx sdk.Context, item types.Item) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKeyPrefix))
	b := k.cdc.MustMarshal(&item)
	store.Set(types.ItemKey(
		item.ItemId,
	), b)
}

// GetItem returns a item from its index
func (k Keeper) GetItem(
	ctx sdk.Context,
	itemId uint64,

) (val types.Item, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKeyPrefix))

	b := store.Get(types.ItemKey(
		itemId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveItem removes a item from the store
func (k Keeper) RemoveItem(
	ctx sdk.Context,
	itemId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKeyPrefix))
	store.Delete(types.ItemKey(
		itemId,
	))
}

// GetAllItem returns all item
func (k Keeper) GetAllItem(ctx sdk.Context) (list []types.Item) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Item
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextItemId(ctx sdk.Context, itemId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: itemId})
	store.Set(types.KeyNextGlobalItemId, bz)
}

func (k Keeper) GetNextItemId(ctx sdk.Context) uint64 {
	var nextItemId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalItemId)
	if bz == nil {
		panic(fmt.Errorf("item has not been initialized -- should have been done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextItemId = val.GetValue()
	}

	return nextItemId
}

func (k Keeper) getNextItemIdAndIncrement(ctx sdk.Context) uint64 {
	nextItemId := k.GetNextItemId(ctx)
	k.SetNextItemId(ctx, nextItemId+1)
	return nextItemId
}
