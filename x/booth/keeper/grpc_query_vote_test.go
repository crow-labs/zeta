package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "zeta/testutil/keeper"
	"zeta/testutil/nullify"
	"zeta/x/booth/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestVoteQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNVote(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetVoteRequest
		response *types.QueryGetVoteResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetVoteRequest{
				VoteId: msgs[0].VoteId,
			},
			response: &types.QueryGetVoteResponse{Vote: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetVoteRequest{
				VoteId: msgs[1].VoteId,
			},
			response: &types.QueryGetVoteResponse{Vote: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetVoteRequest{
				VoteId: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Vote(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestVoteQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNVote(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllVoteRequest {
		return &types.QueryAllVoteRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.VoteAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Vote), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Vote),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.VoteAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Vote), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Vote),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.VoteAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Vote),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.VoteAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
