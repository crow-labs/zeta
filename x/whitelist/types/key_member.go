package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MemberKeyPrefix is the prefix to retrieve all Member
	MemberKeyPrefix = "Member/value/"
)

// MemberKey returns the store key to retrieve a Member from the index fields
func MemberKey(
	baseAddr string,
) []byte {
	var key []byte

	baseAddrBytes := []byte(baseAddr)
	key = append(key, baseAddrBytes...)
	key = append(key, []byte("/")...)

	return key
}
