package keeper

import (
	"zeta/x/booth/types"
)

var _ types.QueryServer = Keeper{}
