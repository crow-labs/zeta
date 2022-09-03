package types

import (
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/cosmos-sdk/types/address"

	"github.com/gogo/protobuf/proto"
)

type PollI interface {
	proto.Marshaler

	GetAddress() sdk.AccAddress
	GetPollId() uint64
	GetDisputeId() uint64
	GetVoteIds() []uint64
	GetTotalPollVotingPower() sdk.Dec
	CalcVotingPowerFromVoterStake(voterStake sdk.Int) (votingPower sdk.Dec, err error)
	AddVoteToPoll(ctx sdk.Context, votingPower sdk.Int) (voteShares sdk.Dec, err error)
	PokePoll(blockTime time.Time)
	GetVerdict() VoteParams
}

func NewPollAddress(pollId uint64) sdk.AccAddress {
	key := append([]byte("poll"), sdk.Uint64ToBigEndian(pollId)...)
	return address.Module(ModuleName, key)
}

func NewPoll(pollId, disputeId uint64) Poll {
	pollAddr := NewPollAddress(pollId)

	poll := &Poll{
		PollId:      pollId,
		PollAccAddr: string(pollAddr),
		VotingPower: sdk.ZeroDec(),
		DisputeId:   disputeId,
		VoteIds:     make([]uint64, 0),
		Verdict:     &VoteParams{},
		Funding:     sdk.Coin{},
	}

	return *poll
}

func (p Poll) GetAddress() sdk.AccAddress {
	addr, err := sdk.AccAddressFromBech32(p.PollAccAddr)
	if err != nil {
		panic(fmt.Sprintf("count not bech32 decode address of poll w/ id: %d", p.GetPollId()))
	}
	return addr
}

func (p Poll) GetTotalPollVotingPower() sdk.Dec {
	return p.VotingPower
}

func (p Poll) CalcVotingPowerFromVoterStake(voterStake sdk.Int) (votingPower sdk.Dec, err error) {
	// square root of crow amount staked is voting power
	return voterStake.ToDec().ApproxSqrt()
}

func (p *Poll) AddVoteToPoll(ctx sdk.Context, voterStake sdk.Int) (voteShares sdk.Dec, err error) {
	voteShares, err = p.CalcVotingPowerFromVoterStake(voterStake)
	if err != nil {
		return sdk.ZeroDec(), err
	}

	p.VotingPower = p.VotingPower.Add(voteShares)

	return sdk.ZeroDec(), nil
}
