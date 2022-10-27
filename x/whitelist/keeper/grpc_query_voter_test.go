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
	"zeta/x/whitelist/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestVoterQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNVoter(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetVoterRequest
		response *types.QueryGetVoterResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetVoterRequest{
				VoterId: msgs[0].VoterId,
			},
			response: &types.QueryGetVoterResponse{Voter: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetVoterRequest{
				VoterId: msgs[1].VoterId,
			},
			response: &types.QueryGetVoterResponse{Voter: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetVoterRequest{
				VoterId: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Voter(wctx, tc.request)
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

func TestVoterQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNVoter(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllVoterRequest {
		return &types.QueryAllVoterRequest{
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
			resp, err := keeper.VoterAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Voter), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Voter),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.VoterAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Voter), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Voter),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.VoterAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Voter),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.VoterAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
