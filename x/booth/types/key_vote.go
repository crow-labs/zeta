package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VoteKeyPrefix is the prefix to retrieve all Vote
	VoteKeyPrefix = "Vote/value/"
)

// VoteKey returns the store key to retrieve a Vote from the index fields
func VoteKey(
	voteId uint64,
) []byte {
	var key []byte

	voteIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(voteIdBytes, voteId)
	key = append(key, voteIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
