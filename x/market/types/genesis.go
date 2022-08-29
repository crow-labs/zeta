package types

import (
	"fmt"

	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:        PortID,
		ItemList:      []Item{},
		SellOrderList: []SellOrder{},
		// this line is used by starport scaffolding # genesis/types/default
		Params:     DefaultParams(),
		NextItemId: 1,
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated index in item
	itemIndexMap := make(map[string]struct{})

	for _, elem := range gs.ItemList {
		index := string(ItemKey(elem.ItemId))
		if _, ok := itemIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for item")
		}
		itemIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in sellOrder
	sellOrderIndexMap := make(map[string]struct{})

	for _, elem := range gs.SellOrderList {
		index := string(SellOrderKey(elem.SellOrderId))
		if _, ok := sellOrderIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for sellOrder")
		}
		sellOrderIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
