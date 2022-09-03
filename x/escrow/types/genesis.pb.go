// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
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

// GenesisState defines the escrow module's genesis state.
type GenesisState struct {
	Params      Params    `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	CrowList    []Crow    `protobuf:"bytes,2,rep,name=crowList,proto3" json:"crowList"`
	DisputeList []Dispute `protobuf:"bytes,7,rep,name=disputeList,proto3" json:"disputeList"`
	// this line is used by starport scaffolding # genesis/proto/state
	NextCrowId    uint64 `protobuf:"varint,3,opt,name=nextCrowId,proto3" json:"nextCrowId,omitempty"`
	NextDisputeId uint64 `protobuf:"varint,4,opt,name=nextDisputeId,proto3" json:"nextDisputeId,omitempty"`
	NextVoteId    uint64 `protobuf:"varint,5,opt,name=nextVoteId,proto3" json:"nextVoteId,omitempty"`
	NextVerdictId uint64 `protobuf:"varint,6,opt,name=nextVerdictId,proto3" json:"nextVerdictId,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_291b6ea4c40e3193, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetCrowList() []Crow {
	if m != nil {
		return m.CrowList
	}
	return nil
}

func (m *GenesisState) GetDisputeList() []Dispute {
	if m != nil {
		return m.DisputeList
	}
	return nil
}

func (m *GenesisState) GetNextCrowId() uint64 {
	if m != nil {
		return m.NextCrowId
	}
	return 0
}

func (m *GenesisState) GetNextDisputeId() uint64 {
	if m != nil {
		return m.NextDisputeId
	}
	return 0
}

func (m *GenesisState) GetNextVoteId() uint64 {
	if m != nil {
		return m.NextVoteId
	}
	return 0
}

func (m *GenesisState) GetNextVerdictId() uint64 {
	if m != nil {
		return m.NextVerdictId
	}
	return 0
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "zeta.escrow.GenesisState")
}

func init() { proto.RegisterFile("escrow/genesis.proto", fileDescriptor_291b6ea4c40e3193) }

var fileDescriptor_291b6ea4c40e3193 = []byte{
	// 303 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x49, 0x2d, 0x4e, 0x2e,
	0xca, 0x2f, 0xd7, 0x4f, 0x4f, 0xcd, 0x4b, 0x2d, 0xce, 0x2c, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0xe2, 0xae, 0x4a, 0x2d, 0x49, 0xd4, 0x83, 0x48, 0x49, 0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83,
	0xc5, 0xf5, 0x41, 0x2c, 0x88, 0x12, 0x29, 0x61, 0xa8, 0xc6, 0x82, 0xc4, 0xa2, 0xc4, 0x5c, 0xa8,
	0x3e, 0x29, 0x41, 0xa8, 0x20, 0x88, 0x80, 0x0a, 0xc1, 0x2c, 0x48, 0xc9, 0x2c, 0x2e, 0x28, 0x2d,
	0x49, 0x85, 0x88, 0x2a, 0x1d, 0x60, 0xe2, 0xe2, 0x71, 0x87, 0x58, 0x19, 0x5c, 0x92, 0x58, 0x92,
	0x2a, 0x64, 0xc8, 0xc5, 0x06, 0x31, 0x49, 0x82, 0x51, 0x81, 0x51, 0x83, 0xdb, 0x48, 0x58, 0x0f,
	0xc9, 0x09, 0x7a, 0x01, 0x60, 0x29, 0x27, 0x96, 0x13, 0xf7, 0xe4, 0x19, 0x82, 0xa0, 0x0a, 0x85,
	0x8c, 0xb9, 0x38, 0x40, 0x92, 0x3e, 0x99, 0xc5, 0x25, 0x12, 0x4c, 0x0a, 0xcc, 0x1a, 0xdc, 0x46,
	0x82, 0x28, 0x9a, 0x9c, 0x8b, 0xf2, 0xcb, 0xa1, 0x5a, 0xe0, 0x0a, 0x85, 0x6c, 0xb8, 0xb8, 0xa1,
	0x2e, 0x01, 0xeb, 0x63, 0x07, 0xeb, 0x13, 0x41, 0xd1, 0xe7, 0x02, 0x91, 0x87, 0x6a, 0x45, 0x56,
	0x2e, 0x24, 0xc7, 0xc5, 0x95, 0x97, 0x5a, 0x51, 0x02, 0x32, 0xd9, 0x33, 0x45, 0x82, 0x59, 0x81,
	0x51, 0x83, 0x25, 0x08, 0x49, 0x44, 0x48, 0x85, 0x8b, 0x17, 0xc4, 0x83, 0x9a, 0xe0, 0x99, 0x22,
	0xc1, 0x02, 0x56, 0x82, 0x2a, 0x08, 0x33, 0x25, 0x2c, 0x1f, 0xac, 0x84, 0x15, 0x61, 0x0a, 0x44,
	0x04, 0x66, 0x4a, 0x58, 0x6a, 0x51, 0x4a, 0x66, 0x72, 0x89, 0x67, 0x8a, 0x04, 0x1b, 0xc2, 0x14,
	0xb8, 0xa0, 0x93, 0xee, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7,
	0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0x09, 0x83,
	0x7c, 0xa3, 0x5f, 0xa1, 0x0f, 0x0d, 0xf9, 0x92, 0xca, 0x82, 0xd4, 0xe2, 0x24, 0x36, 0x70, 0xc0,
	0x1b, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0x8f, 0x91, 0xa2, 0xb4, 0xf1, 0x01, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.DisputeList) > 0 {
		for iNdEx := len(m.DisputeList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DisputeList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if m.NextVerdictId != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.NextVerdictId))
		i--
		dAtA[i] = 0x30
	}
	if m.NextVoteId != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.NextVoteId))
		i--
		dAtA[i] = 0x28
	}
	if m.NextDisputeId != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.NextDisputeId))
		i--
		dAtA[i] = 0x20
	}
	if m.NextCrowId != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.NextCrowId))
		i--
		dAtA[i] = 0x18
	}
	if len(m.CrowList) > 0 {
		for iNdEx := len(m.CrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.CrowList) > 0 {
		for _, e := range m.CrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.NextCrowId != 0 {
		n += 1 + sovGenesis(uint64(m.NextCrowId))
	}
	if m.NextDisputeId != 0 {
		n += 1 + sovGenesis(uint64(m.NextDisputeId))
	}
	if m.NextVoteId != 0 {
		n += 1 + sovGenesis(uint64(m.NextVoteId))
	}
	if m.NextVerdictId != 0 {
		n += 1 + sovGenesis(uint64(m.NextVerdictId))
	}
	if len(m.DisputeList) > 0 {
		for _, e := range m.DisputeList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
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
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CrowList = append(m.CrowList, Crow{})
			if err := m.CrowList[len(m.CrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextCrowId", wireType)
			}
			m.NextCrowId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextCrowId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextDisputeId", wireType)
			}
			m.NextDisputeId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextDisputeId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextVoteId", wireType)
			}
			m.NextVoteId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextVoteId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextVerdictId", wireType)
			}
			m.NextVerdictId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextVerdictId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisputeList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DisputeList = append(m.DisputeList, Dispute{})
			if err := m.DisputeList[len(m.DisputeList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
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
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
