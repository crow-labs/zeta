package keeper

import (
	"zeta/x/market/types"
)

var _ types.QueryServer = Keeper{}
