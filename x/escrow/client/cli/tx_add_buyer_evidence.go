package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/escrow/types"
)

var _ = strconv.Itoa(0)

func CmdAddBuyerEvidence() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-buyer-evidence [crow-id] [dispute-id] [description] [evidence]",
		Short: "Broadcast message addBuyerEvidence",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argDisputeId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argDescription := args[2]
			argEvidence := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddBuyerEvidence(
				clientCtx.GetFromAddress().String(),
				argCrowId,
				argDisputeId,
				argDescription,
				argEvidence,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
