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
		Use:   "raise-buyer-dispute [crow-id] [buyer-id] [title] [description] [external-link] [votes]",
		Short: "Broadcast message raise-buyer-dispute",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argBuyerId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argTitle := args[2]
			argDescription := args[3]
			argExternalLink := args[4]
			argCastVotes := strings.Split(args[5], listSeparator)
			argVotes := make([]uint64, len(argCastVotes))
			for i, arg := range argCastVotes {
				value, err := cast.ToUint64E(arg)
				if err != nil {
					return err
				}
				argVotes[i] = value
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRaiseBuyerDispute(
				clientCtx.GetFromAddress().String(),
				argCrowId,
				argBuyerId,
				argTitle,
				argDescription,
				argExternalLink,
				argVotes,
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
