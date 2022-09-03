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
	crow.DisputeId = disputeId

	k.SetDispute(ctx, dispute)
	k.SetCrow(ctx, crow)

	return disputeId, nil
}

func (k Keeper) validateAddSellerEvidence(ctx sdk.Context, msg types.MsgAddSellerEvidence) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	crow, found := k.GetCrow(ctx, msg.CrowId)
	if !found {
		return types.ErrCrowNotFound
	}

	// TODO: if dispute ID is made a list, this must change
	if crow.DisputeId != msg.DisputeId {
		return types.ErrDisputeNotForCrow
	}

	dispute, found := k.GetDispute(ctx, msg.DisputeId)
	if !found {
		return types.ErrDisputeNotFound
	}

	if dispute.CrowId != crow.DisputeId {
		return types.ErrDisputeNotForCrow
	}

	return k.marketKeeper.ValidateSellerInEscrow(ctx, crow.BuyOrderId, msg.Creator)
}

func (k Keeper) AddSellerEvidenceToDispute(ctx sdk.Context, msg types.MsgAddSellerEvidence) error {
	err := k.validateAddSellerEvidence(ctx, msg)
	if err != nil {
		return err
	}

	dispute, _ := k.GetDispute(ctx, msg.DisputeId)

	dispute.SellerEvidence = append(dispute.SellerEvidence, msg.Description+", "+msg.Evidence)

	k.SetDispute(ctx, dispute)

	return nil
}

func (k Keeper) validateAddBuyerEvidence(ctx sdk.Context, msg types.MsgAddBuyerEvidence) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	crow, found := k.GetCrow(ctx, msg.CrowId)
	if !found {
		return types.ErrCrowNotFound
	}

	return k.marketKeeper.ValidateBuyerInEscrow(ctx, crow.BuyOrderId, msg.Creator)
}

func (k Keeper) AddBuyerEvidenceToDispute(ctx sdk.Context, msg types.MsgAddBuyerEvidence) error {
	err := k.validateAddBuyerEvidence(ctx, msg)
	if err != nil {
		return err
	}

	dispute, _ := k.GetDispute(ctx, msg.DisputeId)

	dispute.BuyerEvidence = append(dispute.BuyerEvidence, msg.Description+", "+msg.Evidence)

	k.SetDispute(ctx, dispute)

	return nil
}
