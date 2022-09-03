package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// DisputeKeyPrefix is the prefix to retrieve all Dispute
	DisputeKeyPrefix = "Dispute/value/"
)

// DisputeKey returns the store key to retrieve a Dispute from the index fields
func DisputeKey(
	disputeId uint64,
) []byte {
	var key []byte

	disputeIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(disputeIdBytes, disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
