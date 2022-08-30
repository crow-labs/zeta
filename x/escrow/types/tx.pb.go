// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type MsgBeginEscrow struct {
	Creator    string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	BuyOrderId uint64 `protobuf:"varint,2,opt,name=buyOrderId,proto3" json:"buyOrderId,omitempty"`
}

func (m *MsgBeginEscrow) Reset()         { *m = MsgBeginEscrow{} }
func (m *MsgBeginEscrow) String() string { return proto.CompactTextString(m) }
func (*MsgBeginEscrow) ProtoMessage()    {}
func (*MsgBeginEscrow) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e01f3e45c7c056c, []int{0}
}
func (m *MsgBeginEscrow) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgBeginEscrow) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgBeginEscrow.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgBeginEscrow) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgBeginEscrow.Merge(m, src)
}
func (m *MsgBeginEscrow) XXX_Size() int {
	return m.Size()
}
func (m *MsgBeginEscrow) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgBeginEscrow.DiscardUnknown(m)
}

var xxx_messageInfo_MsgBeginEscrow proto.InternalMessageInfo

func (m *MsgBeginEscrow) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgBeginEscrow) GetBuyOrderId() uint64 {
	if m != nil {
		return m.BuyOrderId
	}
	return 0
}

type MsgBeginEscrowResponse struct {
	CrowId uint64 `protobuf:"varint,1,opt,name=crowId,proto3" json:"crowId,omitempty"`
}

func (m *MsgBeginEscrowResponse) Reset()         { *m = MsgBeginEscrowResponse{} }
func (m *MsgBeginEscrowResponse) String() string { return proto.CompactTextString(m) }
func (*MsgBeginEscrowResponse) ProtoMessage()    {}
func (*MsgBeginEscrowResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e01f3e45c7c056c, []int{1}
}
func (m *MsgBeginEscrowResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgBeginEscrowResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgBeginEscrowResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgBeginEscrowResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgBeginEscrowResponse.Merge(m, src)
}
func (m *MsgBeginEscrowResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgBeginEscrowResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgBeginEscrowResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgBeginEscrowResponse proto.InternalMessageInfo

func (m *MsgBeginEscrowResponse) GetCrowId() uint64 {
	if m != nil {
		return m.CrowId
	}
	return 0
}

type MsgJoinEscrow struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	CrowId  uint64 `protobuf:"varint,2,opt,name=crowId,proto3" json:"crowId,omitempty"`
}

func (m *MsgJoinEscrow) Reset()         { *m = MsgJoinEscrow{} }
func (m *MsgJoinEscrow) String() string { return proto.CompactTextString(m) }
func (*MsgJoinEscrow) ProtoMessage()    {}
func (*MsgJoinEscrow) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e01f3e45c7c056c, []int{2}
}
func (m *MsgJoinEscrow) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgJoinEscrow) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgJoinEscrow.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgJoinEscrow) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgJoinEscrow.Merge(m, src)
}
func (m *MsgJoinEscrow) XXX_Size() int {
	return m.Size()
}
func (m *MsgJoinEscrow) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgJoinEscrow.DiscardUnknown(m)
}

var xxx_messageInfo_MsgJoinEscrow proto.InternalMessageInfo

func (m *MsgJoinEscrow) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgJoinEscrow) GetCrowId() uint64 {
	if m != nil {
		return m.CrowId
	}
	return 0
}

type MsgJoinEscrowResponse struct {
}

func (m *MsgJoinEscrowResponse) Reset()         { *m = MsgJoinEscrowResponse{} }
func (m *MsgJoinEscrowResponse) String() string { return proto.CompactTextString(m) }
func (*MsgJoinEscrowResponse) ProtoMessage()    {}
func (*MsgJoinEscrowResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e01f3e45c7c056c, []int{3}
}
func (m *MsgJoinEscrowResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgJoinEscrowResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgJoinEscrowResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgJoinEscrowResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgJoinEscrowResponse.Merge(m, src)
}
func (m *MsgJoinEscrowResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgJoinEscrowResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgJoinEscrowResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgJoinEscrowResponse proto.InternalMessageInfo

type MsgCompleteEscrowNoDispute struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	CrowId  uint64 `protobuf:"varint,2,opt,name=crowId,proto3" json:"crowId,omitempty"`
}

func (m *MsgCompleteEscrowNoDispute) Reset()         { *m = MsgCompleteEscrowNoDispute{} }
func (m *MsgCompleteEscrowNoDispute) String() string { return proto.CompactTextString(m) }
func (*MsgCompleteEscrowNoDispute) ProtoMessage()    {}
func (*MsgCompleteEscrowNoDispute) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e01f3e45c7c056c, []int{4}
}
func (m *MsgCompleteEscrowNoDispute) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCompleteEscrowNoDispute) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCompleteEscrowNoDispute.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCompleteEscrowNoDispute) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCompleteEscrowNoDispute.Merge(m, src)
}
func (m *MsgCompleteEscrowNoDispute) XXX_Size() int {
	return m.Size()
}
func (m *MsgCompleteEscrowNoDispute) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCompleteEscrowNoDispute.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCompleteEscrowNoDispute proto.InternalMessageInfo

func (m *MsgCompleteEscrowNoDispute) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgCompleteEscrowNoDispute) GetCrowId() uint64 {
	if m != nil {
		return m.CrowId
	}
	return 0
}

type MsgCompleteEscrowNoDisputeResponse struct {
}

func (m *MsgCompleteEscrowNoDisputeResponse) Reset()         { *m = MsgCompleteEscrowNoDisputeResponse{} }
func (m *MsgCompleteEscrowNoDisputeResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCompleteEscrowNoDisputeResponse) ProtoMessage()    {}
func (*MsgCompleteEscrowNoDisputeResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e01f3e45c7c056c, []int{5}
}
func (m *MsgCompleteEscrowNoDisputeResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCompleteEscrowNoDisputeResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCompleteEscrowNoDisputeResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCompleteEscrowNoDisputeResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCompleteEscrowNoDisputeResponse.Merge(m, src)
}
func (m *MsgCompleteEscrowNoDisputeResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCompleteEscrowNoDisputeResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCompleteEscrowNoDisputeResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCompleteEscrowNoDisputeResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgBeginEscrow)(nil), "zeta.escrow.MsgBeginEscrow")
	proto.RegisterType((*MsgBeginEscrowResponse)(nil), "zeta.escrow.MsgBeginEscrowResponse")
	proto.RegisterType((*MsgJoinEscrow)(nil), "zeta.escrow.MsgJoinEscrow")
	proto.RegisterType((*MsgJoinEscrowResponse)(nil), "zeta.escrow.MsgJoinEscrowResponse")
	proto.RegisterType((*MsgCompleteEscrowNoDispute)(nil), "zeta.escrow.MsgCompleteEscrowNoDispute")
	proto.RegisterType((*MsgCompleteEscrowNoDisputeResponse)(nil), "zeta.escrow.MsgCompleteEscrowNoDisputeResponse")
}

func init() { proto.RegisterFile("escrow/tx.proto", fileDescriptor_8e01f3e45c7c056c) }

var fileDescriptor_8e01f3e45c7c056c = []byte{
	// 306 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x4f, 0x2d, 0x4e, 0x2e,
	0xca, 0x2f, 0xd7, 0x2f, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0xae, 0x4a, 0x2d,
	0x49, 0xd4, 0x83, 0x88, 0x2a, 0x79, 0x71, 0xf1, 0xf9, 0x16, 0xa7, 0x3b, 0xa5, 0xa6, 0x67, 0xe6,
	0xb9, 0x82, 0x45, 0x84, 0x24, 0xb8, 0xd8, 0x93, 0x8b, 0x52, 0x13, 0x4b, 0xf2, 0x8b, 0x24, 0x18,
	0x15, 0x18, 0x35, 0x38, 0x83, 0x60, 0x5c, 0x21, 0x39, 0x2e, 0xae, 0xa4, 0xd2, 0x4a, 0xff, 0xa2,
	0x94, 0xd4, 0x22, 0xcf, 0x14, 0x09, 0x26, 0x05, 0x46, 0x0d, 0x96, 0x20, 0x24, 0x11, 0x25, 0x03,
	0x2e, 0x31, 0x54, 0xb3, 0x82, 0x52, 0x8b, 0x0b, 0xf2, 0xf3, 0x8a, 0x53, 0x85, 0xc4, 0xb8, 0xd8,
	0x40, 0x7c, 0xcf, 0x14, 0xb0, 0x91, 0x2c, 0x41, 0x50, 0x9e, 0x92, 0x23, 0x17, 0xaf, 0x6f, 0x71,
	0xba, 0x57, 0x3e, 0x11, 0x96, 0x23, 0x8c, 0x60, 0x42, 0x31, 0x42, 0x9c, 0x4b, 0x14, 0xc5, 0x08,
	0x98, 0x9d, 0x4a, 0x7e, 0x5c, 0x52, 0xbe, 0xc5, 0xe9, 0xce, 0xf9, 0xb9, 0x05, 0x39, 0xa9, 0x25,
	0xa9, 0x10, 0x49, 0xbf, 0x7c, 0x97, 0xcc, 0xe2, 0x82, 0xd2, 0x92, 0x54, 0x32, 0x2c, 0x52, 0xe1,
	0x52, 0xc2, 0x6d, 0x1e, 0xcc, 0x56, 0xa3, 0x99, 0x4c, 0x5c, 0xcc, 0xbe, 0xc5, 0xe9, 0x42, 0xfe,
	0x5c, 0xdc, 0xc8, 0x81, 0x2a, 0xad, 0x87, 0x14, 0xe8, 0x7a, 0xa8, 0xa1, 0x24, 0xa5, 0x8c, 0x47,
	0x12, 0x1e, 0x84, 0x3e, 0x5c, 0x5c, 0x48, 0xe1, 0x24, 0x85, 0xae, 0x05, 0x21, 0x27, 0xa5, 0x84,
	0x5b, 0x0e, 0x6e, 0x5a, 0x31, 0x97, 0x38, 0xae, 0x90, 0x51, 0x47, 0xd7, 0x8e, 0x43, 0xa1, 0x94,
	0x3e, 0x91, 0x0a, 0x61, 0x96, 0x3a, 0xe9, 0x9e, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3,
	0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c,
	0x43, 0x94, 0x30, 0xc8, 0x24, 0xfd, 0x0a, 0x7d, 0x58, 0x52, 0xad, 0x2c, 0x48, 0x2d, 0x4e, 0x62,
	0x03, 0x27, 0x57, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x92, 0x6e, 0xbc, 0x79, 0xc1, 0x02,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	BeginEscrow(ctx context.Context, in *MsgBeginEscrow, opts ...grpc.CallOption) (*MsgBeginEscrowResponse, error)
	JoinEscrow(ctx context.Context, in *MsgJoinEscrow, opts ...grpc.CallOption) (*MsgJoinEscrowResponse, error)
	CompleteEscrowNoDispute(ctx context.Context, in *MsgCompleteEscrowNoDispute, opts ...grpc.CallOption) (*MsgCompleteEscrowNoDisputeResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) BeginEscrow(ctx context.Context, in *MsgBeginEscrow, opts ...grpc.CallOption) (*MsgBeginEscrowResponse, error) {
	out := new(MsgBeginEscrowResponse)
	err := c.cc.Invoke(ctx, "/zeta.escrow.Msg/BeginEscrow", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) JoinEscrow(ctx context.Context, in *MsgJoinEscrow, opts ...grpc.CallOption) (*MsgJoinEscrowResponse, error) {
	out := new(MsgJoinEscrowResponse)
	err := c.cc.Invoke(ctx, "/zeta.escrow.Msg/JoinEscrow", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) CompleteEscrowNoDispute(ctx context.Context, in *MsgCompleteEscrowNoDispute, opts ...grpc.CallOption) (*MsgCompleteEscrowNoDisputeResponse, error) {
	out := new(MsgCompleteEscrowNoDisputeResponse)
	err := c.cc.Invoke(ctx, "/zeta.escrow.Msg/CompleteEscrowNoDispute", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	BeginEscrow(context.Context, *MsgBeginEscrow) (*MsgBeginEscrowResponse, error)
	JoinEscrow(context.Context, *MsgJoinEscrow) (*MsgJoinEscrowResponse, error)
	CompleteEscrowNoDispute(context.Context, *MsgCompleteEscrowNoDispute) (*MsgCompleteEscrowNoDisputeResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) BeginEscrow(ctx context.Context, req *MsgBeginEscrow) (*MsgBeginEscrowResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BeginEscrow not implemented")
}
func (*UnimplementedMsgServer) JoinEscrow(ctx context.Context, req *MsgJoinEscrow) (*MsgJoinEscrowResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method JoinEscrow not implemented")
}
func (*UnimplementedMsgServer) CompleteEscrowNoDispute(ctx context.Context, req *MsgCompleteEscrowNoDispute) (*MsgCompleteEscrowNoDisputeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CompleteEscrowNoDispute not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_BeginEscrow_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgBeginEscrow)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).BeginEscrow(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/zeta.escrow.Msg/BeginEscrow",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).BeginEscrow(ctx, req.(*MsgBeginEscrow))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_JoinEscrow_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgJoinEscrow)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).JoinEscrow(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/zeta.escrow.Msg/JoinEscrow",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).JoinEscrow(ctx, req.(*MsgJoinEscrow))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_CompleteEscrowNoDispute_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCompleteEscrowNoDispute)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CompleteEscrowNoDispute(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/zeta.escrow.Msg/CompleteEscrowNoDispute",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CompleteEscrowNoDispute(ctx, req.(*MsgCompleteEscrowNoDispute))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "zeta.escrow.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "BeginEscrow",
			Handler:    _Msg_BeginEscrow_Handler,
		},
		{
			MethodName: "JoinEscrow",
			Handler:    _Msg_JoinEscrow_Handler,
		},
		{
			MethodName: "CompleteEscrowNoDispute",
			Handler:    _Msg_CompleteEscrowNoDispute_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "escrow/tx.proto",
}

func (m *MsgBeginEscrow) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgBeginEscrow) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgBeginEscrow) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.BuyOrderId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.BuyOrderId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgBeginEscrowResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgBeginEscrowResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgBeginEscrowResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CrowId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.CrowId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *MsgJoinEscrow) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgJoinEscrow) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgJoinEscrow) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CrowId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.CrowId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgJoinEscrowResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgJoinEscrowResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgJoinEscrowResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgCompleteEscrowNoDispute) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCompleteEscrowNoDispute) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCompleteEscrowNoDispute) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CrowId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.CrowId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgCompleteEscrowNoDisputeResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCompleteEscrowNoDisputeResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCompleteEscrowNoDisputeResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgBeginEscrow) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.BuyOrderId != 0 {
		n += 1 + sovTx(uint64(m.BuyOrderId))
	}
	return n
}

func (m *MsgBeginEscrowResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.CrowId != 0 {
		n += 1 + sovTx(uint64(m.CrowId))
	}
	return n
}

func (m *MsgJoinEscrow) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.CrowId != 0 {
		n += 1 + sovTx(uint64(m.CrowId))
	}
	return n
}

func (m *MsgJoinEscrowResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgCompleteEscrowNoDispute) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.CrowId != 0 {
		n += 1 + sovTx(uint64(m.CrowId))
	}
	return n
}

func (m *MsgCompleteEscrowNoDisputeResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgBeginEscrow) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgBeginEscrow: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgBeginEscrow: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyOrderId", wireType)
			}
			m.BuyOrderId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BuyOrderId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgBeginEscrowResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgBeginEscrowResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgBeginEscrowResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			m.CrowId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CrowId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgJoinEscrow) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgJoinEscrow: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgJoinEscrow: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			m.CrowId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CrowId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgJoinEscrowResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgJoinEscrowResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgJoinEscrowResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCompleteEscrowNoDispute) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCompleteEscrowNoDispute: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCompleteEscrowNoDispute: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			m.CrowId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CrowId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCompleteEscrowNoDisputeResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCompleteEscrowNoDisputeResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCompleteEscrowNoDisputeResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
