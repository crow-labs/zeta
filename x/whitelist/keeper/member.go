package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"zeta/x/whitelist/types"
)

// SetMember set a specific member in the store from its index
func (k Keeper) SetMember(ctx sdk.Context, member types.Member) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberKeyPrefix))
	b := k.cdc.MustMarshal(&member)
	store.Set(types.MemberKey(
		member.BaseAddr,
	), b)
}

// GetMember returns a member from its index
func (k Keeper) GetMember(
	ctx sdk.Context,
	baseAddr string,

) (val types.Member, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberKeyPrefix))

	b := store.Get(types.MemberKey(
		baseAddr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMember removes a member from the store
func (k Keeper) RemoveMember(
	ctx sdk.Context,
	baseAddr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberKeyPrefix))
	store.Delete(types.MemberKey(
		baseAddr,
	))
}

// GetAllMember returns all member
func (k Keeper) GetAllMember(ctx sdk.Context) (list []types.Member) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Member
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
