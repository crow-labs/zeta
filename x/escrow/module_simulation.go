package escrow

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"zeta/testutil/sample"
	escrowsimulation "zeta/x/escrow/simulation"
	"zeta/x/escrow/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = escrowsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRaiseBuyerDispute = "op_weight_msg_raise_buyer_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRaiseBuyerDispute int = 100

	opWeightMsgBeginEscrow = "op_weight_msg_begin_escrow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBeginEscrow int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	escrowGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&escrowGenesis)
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

	var weightMsgRaiseBuyerDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRaiseBuyerDispute, &weightMsgRaiseBuyerDispute, nil,
		func(_ *rand.Rand) {
			weightMsgRaiseBuyerDispute = defaultWeightMsgRaiseBuyerDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRaiseBuyerDispute,
		escrowsimulation.SimulateMsgRaiseBuyerDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBeginEscrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBeginEscrow, &weightMsgBeginEscrow, nil,
		func(_ *rand.Rand) {
			weightMsgBeginEscrow = defaultWeightMsgBeginEscrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBeginEscrow,
		escrowsimulation.SimulateMsgBeginEscrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
