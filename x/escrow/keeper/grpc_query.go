package keeper

import (
	"zeta/x/escrow/types"
)

var _ types.QueryServer = Keeper{}
