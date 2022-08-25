package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"zeta/x/whitelist/types"
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

				MemberList: []types.Member{
					{
						BaseAddr: "0",
					},
					{
						BaseAddr: "1",
					},
				},
				BuyerList: []types.Buyer{
					{
						BuyerId: 0,
					},
					{
						BuyerId: 1,
					},
				},
				SellerList: []types.Seller{
					{
						SellerId: 0,
					},
					{
						SellerId: 1,
					},
				},
				VoterList: []types.Voter{
					{
						VoterId: 0,
					},
					{
						VoterId: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated member",
			genState: &types.GenesisState{
				MemberList: []types.Member{
					{
						BaseAddr: "0",
					},
					{
						BaseAddr: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated buyer",
			genState: &types.GenesisState{
				BuyerList: []types.Buyer{
					{
						BuyerId: 0,
					},
					{
						BuyerId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated seller",
			genState: &types.GenesisState{
				SellerList: []types.Seller{
					{
						SellerId: 0,
					},
					{
						SellerId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated voter",
			genState: &types.GenesisState{
				VoterList: []types.Voter{
					{
						VoterId: 0,
					},
					{
						VoterId: 0,
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
