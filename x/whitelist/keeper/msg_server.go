package keeper

import (
	"context"
	"zeta/x/whitelist/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (k msgServer) BuyerApplication(goCtx context.Context, msg *types.MsgBuyerApplication) (*types.MsgBuyerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyerId, err := k.CreateBuyer(ctx, *msg)
	if err != nil {
		return &types.MsgBuyerApplicationResponse{BuyerId: 0}, err
	}

	return &types.MsgBuyerApplicationResponse{BuyerId: buyerId}, nil
}

func (k msgServer) SellerApplication(goCtx context.Context, msg *types.MsgSellerApplication) (*types.MsgSellerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sellerId, err := k.CreateSeller(ctx, *msg)
	if err != nil {
		return &types.MsgSellerApplicationResponse{SellerId: 0}, err
	}

	return &types.MsgSellerApplicationResponse{SellerId: sellerId}, nil
}

func (k msgServer) VoterApplication(goCtx context.Context, msg *types.MsgVoterApplication) (*types.MsgVoterApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	voterId, err := k.CreateVoter(ctx, *msg)
	if err != nil {
		return &types.MsgVoterApplicationResponse{VoterId: 0}, err
	}

	return &types.MsgVoterApplicationResponse{VoterId: voterId}, nil
}

func (k msgServer) MembershipApplication(goCtx context.Context, msg *types.MsgMembershipApplication) (*types.MsgMembershipApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.CreateMember(ctx, *msg)
	if err != nil {
		return &types.MsgMembershipApplicationResponse{Joined: false}, err
	}

	return &types.MsgMembershipApplicationResponse{}, nil
}
