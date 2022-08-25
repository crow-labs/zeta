package keeper

import (
	"zeta/x/whitelist/types"
)

var _ types.QueryServer = Keeper{}
