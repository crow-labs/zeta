package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"zeta/x/whitelist/keeper"
	"zeta/x/whitelist/types"
)

func SimulateMsgBuyerApplication(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgBuyerApplication{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the BuyerApplication simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "BuyerApplication simulation not implemented"), nil, nil
	}
}
