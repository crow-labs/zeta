package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/market/types"
)

var _ = strconv.Itoa(0)

func CmdPrepareItem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "prepare-item [title] [desciption] [external-link] [seller-id]",
		Short: "Broadcast message prepareItem",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTitle := args[0]
			argDesciption := args[1]
			argExternalLink := args[2]
			argSellerId, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgPrepareItem(
				clientCtx.GetFromAddress().String(),
				argTitle,
				argDesciption,
				argExternalLink,
				argSellerId,
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
