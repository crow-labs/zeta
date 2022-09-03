package keeper

import (
	"fmt"
	"zeta/x/booth/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	gogotypes "github.com/gogo/protobuf/types"
)

// SetVote set a specific vote in the store from its index
func (k Keeper) SetVote(ctx sdk.Context, vote types.Vote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKeyPrefix))
	b := k.cdc.MustMarshal(&vote)
	store.Set(types.VoteKey(
		vote.VoteId,
	), b)
}

// GetVote returns a vote from its index
func (k Keeper) GetVote(
	ctx sdk.Context,
	voteId uint64,

) (val types.Vote, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKeyPrefix))

	b := store.Get(types.VoteKey(
		voteId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveVote removes a vote from the store
func (k Keeper) RemoveVote(
	ctx sdk.Context,
	voteId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKeyPrefix))
	store.Delete(types.VoteKey(
		voteId,
	))
}

// GetAllVote returns all vote
func (k Keeper) GetAllVote(ctx sdk.Context) (list []types.Vote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Vote
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextVoteId(ctx sdk.Context, voteId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: voteId})
	store.Set(types.KeyNextGlobalVoteId, bz)
}

func (k Keeper) GetNextVoteId(ctx sdk.Context) uint64 {
	var nextVoteId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalVoteId)
	if bz == nil {
		panic(fmt.Errorf("vote has not been initialized -- should have been done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextVoteId = val.GetValue()
	}

	return nextVoteId
}

func (k Keeper) getNextVoteIdAndIncrement(ctx sdk.Context) uint64 {
	nextVoteId := k.GetNextVoteId(ctx)
	k.SetNextVoteId(ctx, nextVoteId+1)
	return nextVoteId
}
