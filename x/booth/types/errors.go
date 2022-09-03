package types

// DONTCOVER
import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/booth module sentinel errors
var (
	ErrDefendantClosesDebate = sdkerrors.Register(ModuleName, 4001, "only the defendant in a dispute can start the poll")
	ErrPollNotFound          = sdkerrors.Register(ModuleName, 4002, "poll not found")
	ErrVoteNotFound          = sdkerrors.Register(ModuleName, 4003, "vote not found")
	ErrVoterHasNoPower       = sdkerrors.Register(ModuleName, 4004, "voter has no power")
)
