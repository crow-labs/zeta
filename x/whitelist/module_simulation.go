package whitelist

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"zeta/testutil/sample"
	whitelistsimulation "zeta/x/whitelist/simulation"
	"zeta/x/whitelist/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = whitelistsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgMembershipApplication = "op_weight_msg_membership_application"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMembershipApplication int = 100

	opWeightMsgBuyerApplication = "op_weight_msg_buyer_application"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyerApplication int = 100

	opWeightMsgSellerApplication = "op_weight_msg_seller_application"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSellerApplication int = 100

	opWeightMsgVoterApplication = "op_weight_msg_voter_application"
	// TODO: Determine the simulation weight value
	defaultWeightMsgVoterApplication int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	whitelistGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&whitelistGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgMembershipApplication int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMembershipApplication, &weightMsgMembershipApplication, nil,
		func(_ *rand.Rand) {
			weightMsgMembershipApplication = defaultWeightMsgMembershipApplication
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMembershipApplication,
		whitelistsimulation.SimulateMsgMembershipApplication(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuyerApplication int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyerApplication, &weightMsgBuyerApplication, nil,
		func(_ *rand.Rand) {
			weightMsgBuyerApplication = defaultWeightMsgBuyerApplication
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyerApplication,
		whitelistsimulation.SimulateMsgBuyerApplication(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSellerApplication int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSellerApplication, &weightMsgSellerApplication, nil,
		func(_ *rand.Rand) {
			weightMsgSellerApplication = defaultWeightMsgSellerApplication
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSellerApplication,
		whitelistsimulation.SimulateMsgSellerApplication(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgVoterApplication int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgVoterApplication, &weightMsgVoterApplication, nil,
		func(_ *rand.Rand) {
			weightMsgVoterApplication = defaultWeightMsgVoterApplication
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgVoterApplication,
		whitelistsimulation.SimulateMsgVoterApplication(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
