package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ItemKeyPrefix is the prefix to retrieve all Item
	ItemKeyPrefix = "Item/value/"
)

// ItemKey returns the store key to retrieve a Item from the index fields
func ItemKey(
	itemId uint64,
) []byte {
	var key []byte

	itemIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(itemIdBytes, itemId)
	key = append(key, itemIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
