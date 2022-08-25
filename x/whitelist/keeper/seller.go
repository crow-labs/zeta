package keeper

import (
	"fmt"

	gogotypes "github.com/gogo/protobuf/types"

	"zeta/x/whitelist/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetSeller set a specific seller in the store from its index
func (k Keeper) SetSeller(ctx sdk.Context, seller types.Seller) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerKeyPrefix))
	b := k.cdc.MustMarshal(&seller)
	store.Set(types.SellerKey(
		seller.SellerId,
	), b)
}

// GetSeller returns a seller from its index
func (k Keeper) GetSeller(
	ctx sdk.Context,
	sellerId uint64,

) (val types.Seller, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerKeyPrefix))

	b := store.Get(types.SellerKey(
		sellerId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSeller removes a seller from the store
func (k Keeper) RemoveSeller(
	ctx sdk.Context,
	sellerId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerKeyPrefix))
	store.Delete(types.SellerKey(
		sellerId,
	))
}

// GetAllSeller returns all seller
func (k Keeper) GetAllSeller(ctx sdk.Context) (list []types.Seller) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Seller
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextSellerId(ctx sdk.Context, sellerId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: sellerId})
	store.Set(types.KeyNextGlobalSellerId, bz)
}

func (k Keeper) GetNextSellerId(ctx sdk.Context) uint64 {
	var nextSellerId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalSellerId)
	if bz == nil {
		panic(fmt.Errorf("seller has not been initialized -- should have be done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextSellerId = val.GetValue()
	}

	return nextSellerId
}

func (k Keeper) getNextSellerIdAndIncrement(ctx sdk.Context) uint64 {
	nextSellerId := k.GetNextSellerId(ctx)
	k.SetNextSellerId(ctx, nextSellerId+1)
	return nextSellerId
}

func (k Keeper) GetSellerAddrFromId(ctx sdk.Context, sellerId uint64) (string, error) {
	seller, found := k.GetSeller(ctx, sellerId)
	if !found {
		return "", types.ErrSellerNotFound
	}

	return seller.Address, nil
}

func (k Keeper) AddItemToSeller(ctx sdk.Context, sellerId, itemId uint64) error {
	seller, found := k.GetSeller(ctx, sellerId)
	if !found {
		return types.ErrSellerNotFound
	}

	numItems := len(seller.ActiveItem)
	items := make([]uint64, 0, numItems+1)

	for i := 0; i < numItems; i++ {
		items = append(items, seller.ActiveItem[i])
	}
	items = append(items, itemId)

	seller.ActiveItem = items

	k.SetSeller(ctx, seller)

	return nil
}
