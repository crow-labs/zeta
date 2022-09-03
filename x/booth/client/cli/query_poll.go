package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/booth/types"
)

func CmdListPoll() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-poll",
		Short: "list all poll",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPollRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PollAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPoll() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-poll [poll-id]",
		Short: "shows a poll",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argPollId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetPollRequest{
				PollId: argPollId,
			}

			res, err := queryClient.Poll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
