package keeper

import (
	"zeta/x/booth/types"
	escrowTypes "zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

func (k Keeper) validateBeginPoll(ctx sdk.Context, msg types.MsgBeginPoll) (uint64, error) {
	if err := msg.ValidateBasic(); err != nil {
		return 0, err
	}

	// check poll was began by dispute defendant
	dispute, err := k.escrowKeeper.GetDisputeFromDisputeId(ctx, msg.DisputeId)
	if err != nil {
		return 0, err
	}

	if msg.Creator == dispute.GetCreator() {
		return 0, types.ErrDefendantClosesDebate
	}

	sellerAddr, err := k.whitelistKeeper.GetAccAddrFromSellerId(ctx, dispute.GetSellerId())
	if err != nil {
		return 0, err
	}

	if sellerAddr == msg.Creator {
		return dispute.GetCrowId(), nil
	}

	buyerAddr, err := k.whitelistKeeper.GetAccAddrFromBuyerId(ctx, dispute.GetBuyerId())
	if err != nil {
		return 0, err
	}

	if buyerAddr == msg.Creator {
		return dispute.GetCrowId(), nil
	}

	return 0, escrowTypes.ErrCreatorNotPartOfDispute
}

func (k Keeper) CreatePoll(ctx sdk.Context, msg types.MsgBeginPoll) (uint64, error) {
	// validate message
	crowId, err := k.validateBeginPoll(ctx, msg)
	if err != nil {
		return 0, err
	}

	// create a new poll
	poll := types.NewPoll(k.getNextPollIdAndIncrement(ctx), msg.DisputeId)

	// create poll account
	acc := k.accountKeeper.NewAccount(
		ctx,
		authtypes.NewModuleAccount(
			authtypes.NewBaseAccountWithAddress(poll.GetAddress()),
			poll.GetAddress().String(),
		),
	)
	k.accountKeeper.SetAccount(ctx, acc)

	funding, err := k.escrowKeeper.FundPoll(ctx, crowId, poll.GetAddress())
	if err != nil {
		return 0, err
	}

	poll.Funding = funding

	// add new poll to store
	k.SetPoll(ctx, poll)

	// return poll id
	return poll.PollId, nil
}
