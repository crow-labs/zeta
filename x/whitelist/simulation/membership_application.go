package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"zeta/x/whitelist/keeper"
	"zeta/x/whitelist/types"
)

func SimulateMsgMembershipApplication(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgMembershipApplication{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the MembershipApplication simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "MembershipApplication simulation not implemented"), nil, nil
	}
}
