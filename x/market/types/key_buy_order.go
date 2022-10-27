package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuyOrderKeyPrefix is the prefix to retrieve all BuyOrder
	BuyOrderKeyPrefix = "BuyOrder/value/"
)

// BuyOrderKey returns the store key to retrieve a BuyOrder from the index fields
func BuyOrderKey(
	buyOrderId uint64,
) []byte {
	var key []byte

	buyOrderIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(buyOrderIdBytes, buyOrderId)
	key = append(key, buyOrderIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
