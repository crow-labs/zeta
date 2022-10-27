package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"zeta/x/market/keeper"
	"zeta/x/market/types"
)

func SimulateMsgRemoveItem(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgRemoveItem{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the RemoveItem simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "RemoveItem simulation not implemented"), nil, nil
	}
}
