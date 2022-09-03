package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgBeginEscrow{}, "escrow/BeginEscrow", nil)
	cdc.RegisterConcrete(&MsgJoinEscrow{}, "escrow/JoinEscrow", nil)
	cdc.RegisterConcrete(&MsgCompleteEscrowNoDispute{}, "escrow/CompleteEscrowNoDispute", nil)
	cdc.RegisterConcrete(&MsgRaiseBuyerDispute{}, "escrow/RaiseBuyerDispute", nil)
	cdc.RegisterConcrete(&MsgAddSellerEvidence{}, "escrow/AddSellerEvidence", nil)
	cdc.RegisterConcrete(&MsgAddBuyerEvidence{}, "escrow/AddBuyerEvidence", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBeginEscrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgJoinEscrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCompleteEscrowNoDispute{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRaiseBuyerDispute{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddSellerEvidence{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddBuyerEvidence{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
