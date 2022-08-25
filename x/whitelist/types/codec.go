package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgMembershipApplication{}, "whitelist/MembershipApplication", nil)
	cdc.RegisterConcrete(&MsgBuyerApplication{}, "whitelist/BuyerApplication", nil)
	cdc.RegisterConcrete(&MsgSellerApplication{}, "whitelist/SellerApplication", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMembershipApplication{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuyerApplication{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSellerApplication{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
