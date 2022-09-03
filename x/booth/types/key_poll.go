package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PollKeyPrefix is the prefix to retrieve all Poll
	PollKeyPrefix = "Poll/value/"
)

// PollKey returns the store key to retrieve a Poll from the index fields
func PollKey(
	pollId uint64,
) []byte {
	var key []byte

	pollIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(pollIdBytes, pollId)
	key = append(key, pollIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
