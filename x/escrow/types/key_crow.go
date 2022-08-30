package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CrowKeyPrefix is the prefix to retrieve all Crow
	CrowKeyPrefix = "Crow/value/"
)

// CrowKey returns the store key to retrieve a Crow from the index fields
func CrowKey(
	crowId uint64,
) []byte {
	var key []byte

	crowIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(crowIdBytes, crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
