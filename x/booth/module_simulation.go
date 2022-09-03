package booth

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"zeta/testutil/sample"
	boothsimulation "zeta/x/booth/simulation"
	"zeta/x/booth/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = boothsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgBeginPoll = "op_weight_msg_begin_poll"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBeginPoll int = 100

	opWeightMsgCastVoteForPoll = "op_weight_msg_cast_vote_for_poll"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCastVoteForPoll int = 100

	opWeightMsgRedeemPollShares = "op_weight_msg_redeem_poll_shares"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRedeemPollShares int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	boothGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&boothGenesis)
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

	var weightMsgBeginPoll int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBeginPoll, &weightMsgBeginPoll, nil,
		func(_ *rand.Rand) {
			weightMsgBeginPoll = defaultWeightMsgBeginPoll
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBeginPoll,
		boothsimulation.SimulateMsgBeginPoll(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCastVoteForPoll int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCastVoteForPoll, &weightMsgCastVoteForPoll, nil,
		func(_ *rand.Rand) {
			weightMsgCastVoteForPoll = defaultWeightMsgCastVoteForPoll
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCastVoteForPoll,
		boothsimulation.SimulateMsgCastVoteForPoll(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRedeemPollShares int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRedeemPollShares, &weightMsgRedeemPollShares, nil,
		func(_ *rand.Rand) {
			weightMsgRedeemPollShares = defaultWeightMsgRedeemPollShares
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRedeemPollShares,
		boothsimulation.SimulateMsgRedeemPollShares(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
