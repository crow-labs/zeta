package types

const (
	// ModuleName defines the module name
	ModuleName = "escrow"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_escrow"
)

var (
	KeyNextGlobalCrowId    = []byte{0x07}
	KeyNextGlobalDisputeId = []byte{0x08}
	KeyNextGlobalVoteId    = []byte{0x09}
	KeyNextGlobalVerdictId = []byte{0x10}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
