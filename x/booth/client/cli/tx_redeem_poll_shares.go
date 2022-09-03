package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/booth/types"
)

var _ = strconv.Itoa(0)

func CmdRedeemPollShares() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "redeem-poll-shares [poll-id] [voter-id] [poll-shares]",
		Short: "Broadcast message redeemPollShares",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPollId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argVoterId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argPollShares, err := sdk.ParseCoinNormalized(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRedeemPollShares(
				clientCtx.GetFromAddress().String(),
				argPollId,
				argVoterId,
				argPollShares,
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
