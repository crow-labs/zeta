package keeper

import (
	"fmt"
	"zeta/x/whitelist/types"

	gogotypes "github.com/gogo/protobuf/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
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

func (k Keeper) SetNextBuyerId(ctx sdk.Context, buyerId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: buyerId})
	store.Set(types.KeyNextGlobalBuyerId, bz)
}

func (k Keeper) GetNextBuyerId(ctx sdk.Context) uint64 {
	var nextBuyerId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalBuyerId)
	if bz == nil {
		panic(fmt.Errorf("buyer has not been initialized -- should be done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextBuyerId = val.GetValue()
	}

	return nextBuyerId
}

func (k Keeper) getNextBuyerIdAndIncrement(ctx sdk.Context) uint64 {
	nextBuyerId := k.GetNextBuyerId(ctx)
	k.SetNextBuyerId(ctx, nextBuyerId+1)
	return nextBuyerId
}

func (k Keeper) GetBuyerAddrFromId(ctx sdk.Context, buyerId uint64) (string, error) {
	buyer, found := k.GetBuyer(ctx, buyerId)
	if !found {
		return "", types.ErrBuyerNotFound
	}

	return buyer.Address, nil
}

func (k Keeper) AddBuyOrderToBuyer(ctx sdk.Context, buyerId, orderId uint64) error {
	buyer, found := k.GetBuyer(ctx, buyerId)
	if !found {
		return types.ErrBuyerNotFound
	}

	numOrder := len(buyer.ActiveOrder)
	orders := make([]uint64, 0, numOrder+1)

	for i := 0; i < numOrder; i++ {
		orders = append(orders, buyer.ActiveOrder[i])
	}

	orders = append(orders, orderId)

	buyer.ActiveOrder = orders

	k.SetBuyer(ctx, buyer)

	return nil
}

func (k Keeper) PunishBuyerWithBlacklist(ctx sdk.Context, buyerId uint64) error {
	buyer, found := k.GetBuyer(ctx, buyerId)
	if !found {
		return types.ErrBuyerNotFound
	}

	buyer.AcceptBlacklist()

	k.SetBuyer(ctx, buyer)

	return nil
}
