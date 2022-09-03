package keeper

import (
	"zeta/x/escrow/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) validateRaiseBuyerDispute(ctx sdk.Context, msg types.MsgRaiseBuyerDispute) (buyerId, sellerId uint64, err error) {
	if err := msg.ValidateBasic(); err != nil {
		return 0, 0, err
	}

	crow, found := k.GetCrow(ctx, msg.CrowId)
	if !found {
		return 0, 0, types.ErrCrowNotFound
	}

	err = k.marketKeeper.ValidateBuyerInEscrow(ctx, crow.BuyOrderId, msg.Creator)
	if err != nil {
		return 0, 0, err
	}

	return k.marketKeeper.GetBuyerAndSellerIdFromBuyOrder(ctx, crow.BuyOrderId)
}

func NewDispute(crowId, plaintiffId, defendantId, disputeId uint64, title, description string, buyerEvidence, sellerEvidence []string) types.Dispute {
	dispute := &types.Dispute{
		DisputeId:      disputeId,
		Title:          title,
		Description:    description,
		BuyerEvidence:  buyerEvidence,
		SellerEvidence: sellerEvidence,
		CrowId:         crowId,
		PlaintiffId:    plaintiffId,
		DefendantId:    defendantId,
	}

	return *dispute
}

func (k Keeper) CreateBuyerDispute(ctx sdk.Context, msg types.MsgRaiseBuyerDispute) (disputeId uint64, err error) {
	buyerId, sellerId, err := k.validateRaiseBuyerDispute(ctx, msg)
	if err != nil {
		return 0, err
	}

	disputeId = k.getNextDisputeIdAndIncrement(ctx)

	dispute := NewDispute(msg.CrowId, buyerId, sellerId, disputeId, msg.Title, msg.Description, msg.Evidence, []string{})

	crow, _ := k.GetCrow(ctx, msg.CrowId)
	crow.Status = "buyerDispute"

	k.SetDispute(ctx, dispute)
	k.SetCrow(ctx, crow)

	return disputeId, nil
}
