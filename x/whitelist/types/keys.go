package types

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
)

var (
	KeyNextGlobalBuyerId  = []byte{0x01}
	KeyNextGlobalSellerId = []byte{0x02}
	KeyNextGlobalVoterId  = []byte{0x03}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
