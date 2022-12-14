package types

const (
	// ModuleName defines the module name
	ModuleName = "market"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_market"

	// Version defines the current version the IBC module supports
	Version = "market-1"

	// PortID is the default port id that module binds to
	PortID = "market"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey                  = KeyPrefix("market-port-")
	KeyNextGlobalItemId      = []byte{0x04}
	KeyNextGlobalSellOrderId = []byte{0x05}
	KeyNextGlobalBuyOrderId  = []byte{0x06}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
