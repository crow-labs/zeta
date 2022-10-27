package simulation

import (
	"math/rand"

	"zeta/x/escrow/keeper"
	"zeta/x/escrow/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgPostSellerEvidence(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgPostSellerEvidence{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the PostSellerEvidence simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "PostSellerEvidence simulation not implemented"), nil, nil
	}
}
