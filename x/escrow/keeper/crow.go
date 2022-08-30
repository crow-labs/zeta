package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/escrow/types"
)

// SetCrow set a specific crow in the store from its index
func (k Keeper) SetCrow(ctx sdk.Context, crow types.Crow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CrowKeyPrefix))
	b := k.cdc.MustMarshal(&crow)
	store.Set(types.CrowKey(
		crow.CrowId,
	), b)
}

// GetCrow returns a crow from its index
func (k Keeper) GetCrow(
	ctx sdk.Context,
	crowId uint64,

) (val types.Crow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CrowKeyPrefix))

	b := store.Get(types.CrowKey(
		crowId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCrow removes a crow from the store
func (k Keeper) RemoveCrow(
	ctx sdk.Context,
	crowId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CrowKeyPrefix))
	store.Delete(types.CrowKey(
		crowId,
	))
}

// GetAllCrow returns all crow
func (k Keeper) GetAllCrow(ctx sdk.Context) (list []types.Crow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CrowKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Crow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
