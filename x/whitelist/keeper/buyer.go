package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/whitelist/types"
)

// SetBuyer set a specific buyer in the store from its index
func (k Keeper) SetBuyer(ctx sdk.Context, buyer types.Buyer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerKeyPrefix))
	b := k.cdc.MustMarshal(&buyer)
	store.Set(types.BuyerKey(
		buyer.BuyerId,
	), b)
}

// GetBuyer returns a buyer from its index
func (k Keeper) GetBuyer(
	ctx sdk.Context,
	buyerId uint64,

) (val types.Buyer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerKeyPrefix))

	b := store.Get(types.BuyerKey(
		buyerId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyer removes a buyer from the store
func (k Keeper) RemoveBuyer(
	ctx sdk.Context,
	buyerId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerKeyPrefix))
	store.Delete(types.BuyerKey(
		buyerId,
	))
}

// GetAllBuyer returns all buyer
func (k Keeper) GetAllBuyer(ctx sdk.Context) (list []types.Buyer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Buyer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
