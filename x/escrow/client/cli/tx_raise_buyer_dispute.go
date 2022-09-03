package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
	"zeta/x/escrow/types"
)

var _ = strconv.Itoa(0)

func CmdRaiseBuyerDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "raise-buyer-dispute [crow-id] [title] [description] [evidence]",
		Short: "Broadcast message raiseBuyerDispute",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argTitle := args[1]
			argDescription := args[2]
			argEvidence := strings.Split(args[3], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRaiseBuyerDispute(
				clientCtx.GetFromAddress().String(),
				argCrowId,
				argTitle,
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
