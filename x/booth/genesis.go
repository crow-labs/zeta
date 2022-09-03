package booth

import (
	"zeta/x/booth/keeper"
	"zeta/x/booth/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the vote
	for _, elem := range genState.VoteList {
		k.SetVote(ctx, elem)
	}
	// Set all the poll
	for _, elem := range genState.PollList {
		k.SetPoll(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
	k.SetNextPollId(ctx, genState.NextPollId)
	k.SetNextVoteId(ctx, genState.NextVoteId)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.VoteList = k.GetAllVote(ctx)
	genesis.PollList = k.GetAllPoll(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	genesis.NextPollId = k.GetNextPollId(ctx)
	genesis.NextVoteId = k.GetNextVoteId(ctx)
	return genesis
}
