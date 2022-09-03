package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"zeta/x/escrow/types"
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

				CrowList: []types.Crow{
					{
						CrowId: 0,
					},
					{
						CrowId: 1,
					},
				},
				DisputeList: []types.Dispute{
					{
						DisputeId: 0,
					},
					{
						DisputeId: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated crow",
			genState: &types.GenesisState{
				CrowList: []types.Crow{
					{
						CrowId: 0,
					},
					{
						CrowId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated dispute",
			genState: &types.GenesisState{
				DisputeList: []types.Dispute{
					{
						DisputeId: 0,
					},
					{
						DisputeId: 0,
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
