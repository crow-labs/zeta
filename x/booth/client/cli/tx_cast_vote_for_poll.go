package cli

import (
	"strconv"

	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/booth/types"
)

var _ = strconv.Itoa(0)

func CmdCastVoteForPoll() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "cast-vote-for-poll [poll-id] [voter-id] [ballot]",
		Short: "Broadcast message castVoteForPoll",
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
			argBallot := new(types.VoteParams)
			err = json.Unmarshal([]byte(args[2]), argBallot)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCastVoteForPoll(
				clientCtx.GetFromAddress().String(),
				argPollId,
				argVoterId,
				argBallot,
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
