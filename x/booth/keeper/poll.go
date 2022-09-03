package keeper

import (
	"fmt"
	"zeta/x/booth/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	gogotypes "github.com/gogo/protobuf/types"
)

// SetPoll set a specific poll in the store from its index
func (k Keeper) SetPoll(ctx sdk.Context, poll types.Poll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))
	b := k.cdc.MustMarshal(&poll)
	store.Set(types.PollKey(
		poll.PollId,
	), b)
}

// GetPoll returns a poll from its index
func (k Keeper) GetPoll(
	ctx sdk.Context,
	pollId uint64,

) (val types.Poll, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))

	b := store.Get(types.PollKey(
		pollId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePoll removes a poll from the store
func (k Keeper) RemovePoll(
	ctx sdk.Context,
	pollId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))
	store.Delete(types.PollKey(
		pollId,
	))
}

// GetAllPoll returns all poll
func (k Keeper) GetAllPoll(ctx sdk.Context) (list []types.Poll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Poll
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) SetNextPollId(ctx sdk.Context, pollId uint64) {
	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&gogotypes.UInt64Value{Value: pollId})
	store.Set(types.KeyNextGlobalPollId, bz)
}

func (k Keeper) GetNextPollId(ctx sdk.Context) uint64 {
	var nextPollId uint64
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyNextGlobalPollId)
	if bz == nil {
		panic(fmt.Errorf("poll has not been initialized -- should have been done in init genesis"))
	} else {
		val := gogotypes.UInt64Value{}

		err := k.cdc.Unmarshal(bz, &val)
		if err != nil {
			panic(err)
		}

		nextPollId = val.GetValue()
	}

	return nextPollId
}

func (k Keeper) getNextPollIdAndIncrement(ctx sdk.Context) uint64 {
	nextPollId := k.GetNextPollId(ctx)
	k.SetNextPollId(ctx, nextPollId)
	return nextPollId
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
