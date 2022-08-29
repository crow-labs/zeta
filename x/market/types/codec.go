package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgPrepareItem{}, "market/PrepareItem", nil)
	cdc.RegisterConcrete(&MsgRemoveItem{}, "market/RemoveItem", nil)
	cdc.RegisterConcrete(&MsgListItem{}, "market/ListItem", nil)
	cdc.RegisterConcrete(&MsgPlaceBuyOrder{}, "market/PlaceBuyOrder", nil)
	cdc.RegisterConcrete(&MsgAcceptBuyOrder{}, "market/AcceptBuyOrder", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPrepareItem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRemoveItem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgListItem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPlaceBuyOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAcceptBuyOrder{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
