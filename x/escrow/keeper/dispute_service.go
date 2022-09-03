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

func NewDispute(crowId, buyerId, sellerId, disputeId uint64, title, description, creator string, buyerEvidence, sellerEvidence []string) types.Dispute {
	dispute := &types.Dispute{
		DisputeId:      disputeId,
		Title:          title,
		Description:    description,
		BuyerEvidence:  buyerEvidence,
		SellerEvidence: sellerEvidence,
		CrowId:         crowId,
		BuyerId:        buyerId,
		SellerId:       sellerId,
		Creator:        creator,
	}

	return *dispute
}

func (k Keeper) CreateBuyerDispute(ctx sdk.Context, msg types.MsgRaiseBuyerDispute) (disputeId uint64, err error) {
	buyerId, sellerId, err := k.validateRaiseBuyerDispute(ctx, msg)
	if err != nil {
		return 0, err
	}

	disputeId = k.getNextDisputeIdAndIncrement(ctx)

	dispute := NewDispute(msg.CrowId, buyerId, sellerId, disputeId, msg.Title, msg.Description, msg.Creator, msg.Evidence, []string{})

	crow, _ := k.GetCrow(ctx, msg.CrowId)
	crow.Status = "buyerDispute"

	k.SetDispute(ctx, dispute)
	k.SetCrow(ctx, crow)

	return disputeId, nil
}

func (k Keeper) GetDisputeFromDisputeId(ctx sdk.Context, disputeId uint64) (types.Dispute, error) {
	dispute, found := k.GetDispute(ctx, disputeId)
	if !found {
		return types.Dispute{}, types.ErrDisputeNotFound
	}

	return dispute, nil
}

func (k Keeper) FundPoll(ctx sdk.Context, crowId uint64, pollAccAddr sdk.AccAddress) (sdk.Coin, error) {
	crow, found := k.GetCrow(ctx, crowId)
	if !found {
		return sdk.Coin{}, types.ErrCrowNotFound
	}

	fromAddr, err := sdk.AccAddressFromBech32(crow.GetEscrowAddr())
	if err != nil {
		return sdk.Coin{}, err
	}

	collateral := crow.GetBuyerCollateral()

	err = k.bankKeeper.SendCoins(ctx, fromAddr, pollAccAddr, sdk.NewCoins(collateral))
	if err != nil {
		return sdk.Coin{}, err
	}

	crow.BuyerCollateral = sdk.NewCoin(crow.BuyerCollateral.Denom, sdk.ZeroInt())
	crow.Status = "pollFunded"

	k.SetCrow(ctx, crow)

	return collateral, nil
}
