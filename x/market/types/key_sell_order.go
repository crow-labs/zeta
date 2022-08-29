package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SellOrderKeyPrefix is the prefix to retrieve all SellOrder
	SellOrderKeyPrefix = "SellOrder/value/"
)

// SellOrderKey returns the store key to retrieve a SellOrder from the index fields
func SellOrderKey(
	sellOrderId uint64,
) []byte {
	var key []byte

	sellOrderIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(sellOrderIdBytes, sellOrderId)
	key = append(key, sellOrderIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
