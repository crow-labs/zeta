package keeper

import (
	"fmt"
	"zeta/x/booth/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) validateCastVoteForPollMsg(ctx sdk.Context, msg types.MsgCastVoteForPoll) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	poll, found := k.GetPoll(ctx, msg.PollId)
	if !found {
		return types.ErrVoteNotFound
	}

	dispute, err := k.escrowKeeper.GetDisputeFromDisputeId(ctx, poll.DisputeId)
	if err != nil {
		return err
	}

	// check that voter is not the buyer or seller
	return k.whitelistKeeper.ValidateVoterNotBuyerOrSeller(ctx, msg.GetVoterId(), dispute.GetBuyerId(), dispute.GetSellerId())
}

func NewVoteForPoll(voteId, pollId, voterId uint64, ballot *types.VoteParams) types.Vote {
	vote := &types.Vote{
		VoteId:  voteId,
		PollId:  pollId,
		VoterId: voterId,
		Ballot:  *ballot,
	}

	return *vote
}

func GetPollVoteDenom(pollId uint64) string {
	return fmt.Sprintf("poll%d/", pollId)
}

func (k Keeper) CreateVoteForPoll(ctx sdk.Context, msg types.MsgCastVoteForPoll) (uint64, error) {
	err := k.validateCastVoteForPollMsg(ctx, msg)
	if err != nil {
		return 0, err
	}

	voteId := k.getNextVoteIdAndIncrement(ctx)
	vote := NewVoteForPoll(voteId, msg.PollId, msg.VoterId, msg.GetBallot())

	poll, _ := k.GetPoll(ctx, msg.PollId)

	// get staked amount from msg creator
	addr, err := sdk.AccAddressFromBech32(msg.GetCreator())
	if err != nil {
		return 0, err
	}

	staked := k.bankKeeper.GetBalance(ctx, addr, "stake")
	if staked.Amount.Equal(sdk.ZeroInt()) {
		return 0, types.ErrVoterHasNoPower
	}

	shares, err := poll.AddVoteToPoll(ctx, vote.GetVoteId(), staked.Amount)
	if err != nil {
		return 0, err
	}

	voteShareDenom := GetPollVoteDenom(msg.PollId)
	shareCoin := sdk.NewCoin(voteShareDenom, shares)

	err = k.bankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(shareCoin))
	if err != nil {
		return 0, err
	}

	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, sdk.NewCoins(shareCoin))
	if err != nil {
		return 0, err
	}

	k.SetVote(ctx, vote)

	return voteId, nil
}
