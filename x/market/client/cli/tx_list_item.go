package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/market/types"
)

var _ = strconv.Itoa(0)

func CmdListItem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-item [item-id] [seller-id] [price] [collateral]",
		Short: "Broadcast message listItem",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argItemId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argSellerId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argPrice, err := sdk.ParseCoinNormalized(args[2])
			if err != nil {
				return err
			}
			argCollateral, err := sdk.ParseCoinNormalized(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgListItem(
				clientCtx.GetFromAddress().String(),
				argItemId,
				argSellerId,
				argPrice,
				argCollateral,
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
