package keeper

import (
	"fmt"

	gogotypes "github.com/gogo/protobuf/types"

	"zeta/x/whitelist/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetVoter set a specific voter in the store from its index
func (k Keeper) SetVoter(ctx sdk.Context, voter types.Voter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))
	b := k.cdc.MustMarshal(&voter)
	store.Set(types.VoterKey(
		voter.VoterId,
	), b)
}

// GetVoter returns a voter from its index
func (k Keeper) GetVoter(
	ctx sdk.Context,
	voterId uint64,

) (val types.Voter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))

	b := store.Get(types.VoterKey(
		voterId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveVoter removes a voter from the store
func (k Keeper) RemoveVoter(
	ctx sdk.Context,
	voterId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))
	store.Delete(types.VoterKey(
		voterId,
	))
}

// GetAllVoter returns all voter
func (k Keeper) GetAllVoter(ctx sdk.Context) (list []types.Voter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Voter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextVoterId(ctx sdk.Context, voterId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: voterId})
	store.Set(types.KeyNextGlobalVoterId, bz)
}

func (k Keeper) GetNextVoterId(ctx sdk.Context) uint64 {
	var nextVoterId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalVoterId)
	if bz == nil {
		panic(fmt.Errorf("voter has not been initialized -- should be done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextVoterId = val.GetValue()
	}

	return nextVoterId
}

func (k Keeper) getNextVoterIdAndIncrement(ctx sdk.Context) uint64 {
	nextVoterId := k.GetNextVoterId(ctx)
	k.SetNextVoterId(ctx, nextVoterId+1)
	return nextVoterId
}
