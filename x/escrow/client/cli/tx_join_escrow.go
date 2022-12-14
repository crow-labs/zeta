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

func CmdJoinEscrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "join-escrow [crow-id]",
		Short: "Broadcast message joinEscrow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgJoinEscrow(
				clientCtx.GetFromAddress().String(),
				argCrowId,
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
