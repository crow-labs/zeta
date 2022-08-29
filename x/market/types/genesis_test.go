package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"zeta/x/market/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				PortId: types.PortID,
				ItemList: []types.Item{
					{
						ItemId: 0,
					},
					{
						ItemId: 1,
					},
				},
				SellOrderList: []types.SellOrder{
					{
						SellOrderId: 0,
					},
					{
						SellOrderId: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated item",
			genState: &types.GenesisState{
				ItemList: []types.Item{
					{
						ItemId: 0,
					},
					{
						ItemId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sellOrder",
			genState: &types.GenesisState{
				SellOrderList: []types.SellOrder{
					{
						SellOrderId: 0,
					},
					{
						SellOrderId: 0,
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
