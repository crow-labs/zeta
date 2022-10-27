package keeper

import (
	"fmt"
	"zeta/x/escrow/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	gogotypes "github.com/gogo/protobuf/types"
)

// SetDispute set a specific dispute in the store from its index
func (k Keeper) SetDispute(ctx sdk.Context, dispute types.Dispute) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DisputeKeyPrefix))
	b := k.cdc.MustMarshal(&dispute)
	store.Set(types.DisputeKey(
		dispute.DisputeId,
	), b)
}

// GetDispute returns a dispute from its index
func (k Keeper) GetDispute(
	ctx sdk.Context,
	disputeId uint64,

) (val types.Dispute, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DisputeKeyPrefix))

	b := store.Get(types.DisputeKey(
		disputeId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDispute removes a dispute from the store
func (k Keeper) RemoveDispute(
	ctx sdk.Context,
	disputeId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DisputeKeyPrefix))
	store.Delete(types.DisputeKey(
		disputeId,
	))
}

// GetAllDispute returns all dispute
func (k Keeper) GetAllDispute(ctx sdk.Context) (list []types.Dispute) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DisputeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Dispute
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextDisputeId(ctx sdk.Context, disputeId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: disputeId})
	store.Set(types.KeyNextGlobalDisputeId, bz)
}

func (k Keeper) GetNextDisputeId(ctx sdk.Context) uint64 {
	var nextDisputeId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalDisputeId)
	if bz == nil {
		panic(fmt.Errorf("dispute has not been initialized - should have been done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		return nextDisputeId
	}
}

func (k Keeper) getNextDisputeIdAndIncrement(ctx sdk.Context) uint64 {
	nextDisputeId := k.GetNextDisputeId(ctx)
	k.SetNextDisputeId(ctx, nextDisputeId+1)
	return nextDisputeId
}
