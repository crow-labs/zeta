package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MemberList: []Member{},
		BuyerList:  []Buyer{},
		SellerList: []Seller{},
		// this line is used by starport scaffolding # genesis/types/default
		Params:      DefaultParams(),
		NextBuyerId: 1,
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in member
	memberIndexMap := make(map[string]struct{})

	for _, elem := range gs.MemberList {
		index := string(MemberKey(elem.BaseAddr))
		if _, ok := memberIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for member")
		}
		memberIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in buyer
	buyerIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyerList {
		index := string(BuyerKey(elem.BuyerId))
		if _, ok := buyerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyer")
		}
		buyerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in seller
	sellerIndexMap := make(map[string]struct{})

	for _, elem := range gs.SellerList {
		index := string(SellerKey(elem.SellerId))
		if _, ok := sellerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for seller")
		}
		sellerIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
