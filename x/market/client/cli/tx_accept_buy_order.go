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

func CmdAcceptBuyOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "accept-buy-order [buy-order-id] [seller-id]",
		Short: "Broadcast message acceptBuyOrder",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBuyOrderId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argSellerId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAcceptBuyOrder(
				clientCtx.GetFromAddress().String(),
				argBuyOrderId,
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
