package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ModuleName defines the module name
	ModuleName = "whitelist"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_whitelist"

	// VoterKeyPrefix is the prefix to retrieve all Voter
	VoterKeyPrefix = "Voter/value/"

	// SellerKeyPrefix is the prefix to retrieve all Seller
	SellerKeyPrefix = "Seller/value/"

	// BuyerKeyPrefix is the prefix to retrieve all Buyer
	BuyerKeyPrefix = "Buyer/value/"

	// MemberKeyPrefix is the prefix to retrieve all Member
	MemberKeyPrefix = "Member/value/"
)

var (
	KeyNextGlobalBuyerId  = []byte{0x01}
	KeyNextGlobalSellerId = []byte{0x02}
	KeyNextGlobalVoterId  = []byte{0x03}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// VoterKey returns the store key to retrieve a Voter from the index fields
func VoterKey(
	voterId uint64,
) []byte {
	var key []byte

	voterIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(voterIdBytes, voterId)
	key = append(key, voterIdBytes...)
	key = append(key, []byte("/")...)

	return key
}

// SellerKey returns the store key to retrieve a Seller from the index fields
func SellerKey(
	sellerId uint64,
) []byte {
	var key []byte

	sellerIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(sellerIdBytes, sellerId)
	key = append(key, sellerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}

// BuyerKey returns the store key to retrieve a Buyer from the index fields
func BuyerKey(
	buyerId uint64,
) []byte {
	var key []byte

	buyerIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(buyerIdBytes, buyerId)
	key = append(key, buyerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}

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
