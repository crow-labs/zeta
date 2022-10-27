package types

import (
	fmt "fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
)

// returns an account for the crow id
func NewCrowAddress(crowId uint64) sdk.AccAddress {
	key := append([]byte("crow"), sdk.Uint64ToBigEndian(crowId)...)
	return address.Module(ModuleName, key)
}

func (c Crow) GetAddress() sdk.AccAddress {
	addr, err := sdk.AccAddressFromBech32(c.EscrowAddr)
	if err != nil {
		panic(fmt.Sprintf("could not bech32 decode Addr of crow w/ id: %d", c.CrowId))
	}
	return addr
}
