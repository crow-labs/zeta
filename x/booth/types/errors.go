package types

// DONTCOVER
import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/booth module sentinel errors
var (
	ErrDefendantClosesDebate = sdkerrors.Register(ModuleName, 4001, "only the defendant in a dispute can start the poll")
)
