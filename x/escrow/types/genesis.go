package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CrowList:    []Crow{},
		DisputeList: []Dispute{},
		// this line is used by starport scaffolding # genesis/types/default
		Params:        DefaultParams(),
		NextCrowId:    1,
		NextDisputeId: 1,
		NextVoteId:    1,
		NextVerdictId: 1,
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in crow
	crowIndexMap := make(map[string]struct{})

	for _, elem := range gs.CrowList {
		index := string(CrowKey(elem.CrowId))
		if _, ok := crowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for crow")
		}
		crowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in dispute
	disputeIndexMap := make(map[string]struct{})

	for _, elem := range gs.DisputeList {
		index := string(DisputeKey(elem.DisputeId))
		if _, ok := disputeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for dispute")
		}
		disputeIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
