package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"zeta/x/market/types"
)

func CmdListSellOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-sell-order",
		Short: "list all sellOrder",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSellOrderRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SellOrderAll(context.Background(), params)
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

func CmdShowSellOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-sell-order [sell-order-id]",
		Short: "shows a sellOrder",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argSellOrderId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetSellOrderRequest{
				SellOrderId: argSellOrderId,
			}

			res, err := queryClient.SellOrder(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
