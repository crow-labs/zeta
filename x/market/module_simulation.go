package market

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"zeta/testutil/sample"
	marketsimulation "zeta/x/market/simulation"
	"zeta/x/market/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = marketsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgPrepareItem = "op_weight_msg_prepare_item"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPrepareItem int = 100

	opWeightMsgRemoveItem = "op_weight_msg_remove_item"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRemoveItem int = 100

	opWeightMsgListItem = "op_weight_msg_list_item"
	// TODO: Determine the simulation weight value
	defaultWeightMsgListItem int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	marketGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&marketGenesis)
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

	var weightMsgPrepareItem int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPrepareItem, &weightMsgPrepareItem, nil,
		func(_ *rand.Rand) {
			weightMsgPrepareItem = defaultWeightMsgPrepareItem
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPrepareItem,
		marketsimulation.SimulateMsgPrepareItem(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRemoveItem int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRemoveItem, &weightMsgRemoveItem, nil,
		func(_ *rand.Rand) {
			weightMsgRemoveItem = defaultWeightMsgRemoveItem
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRemoveItem,
		marketsimulation.SimulateMsgRemoveItem(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgListItem int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgListItem, &weightMsgListItem, nil,
		func(_ *rand.Rand) {
			weightMsgListItem = defaultWeightMsgListItem
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgListItem,
		marketsimulation.SimulateMsgListItem(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
