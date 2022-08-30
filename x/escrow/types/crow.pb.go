// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/crow.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
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

type Crow struct {
	CrowId     uint64     `protobuf:"varint,1,opt,name=crowId,proto3" json:"crowId,omitempty"`
	BuyOrderId uint64     `protobuf:"varint,2,opt,name=buyOrderId,proto3" json:"buyOrderId,omitempty"`
	DisputeId  uint64     `protobuf:"varint,3,opt,name=disputeId,proto3" json:"disputeId,omitempty"`
	VerdictId  uint64     `protobuf:"varint,4,opt,name=verdictId,proto3" json:"verdictId,omitempty"`
	Amount     types.Coin `protobuf:"bytes,5,opt,name=amount,proto3" json:"amount"`
	SellerCol  types.Coin `protobuf:"bytes,6,opt,name=sellerCol,proto3" json:"sellerCol"`
	BuyerCol   types.Coin `protobuf:"bytes,7,opt,name=buyerCol,proto3" json:"buyerCol"`
	Status     string     `protobuf:"bytes,8,opt,name=status,proto3" json:"status,omitempty"`
	Addr       string     `protobuf:"bytes,9,opt,name=addr,proto3" json:"addr,omitempty"`
}

func (m *Crow) Reset()         { *m = Crow{} }
func (m *Crow) String() string { return proto.CompactTextString(m) }
func (*Crow) ProtoMessage()    {}
func (*Crow) Descriptor() ([]byte, []int) {
	return fileDescriptor_e183fe88f92613f0, []int{0}
}
func (m *Crow) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Crow) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Crow.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Crow) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Crow.Merge(m, src)
}
func (m *Crow) XXX_Size() int {
	return m.Size()
}
func (m *Crow) XXX_DiscardUnknown() {
	xxx_messageInfo_Crow.DiscardUnknown(m)
}

var xxx_messageInfo_Crow proto.InternalMessageInfo

func (m *Crow) GetCrowId() uint64 {
	if m != nil {
		return m.CrowId
	}
	return 0
}

func (m *Crow) GetBuyOrderId() uint64 {
	if m != nil {
		return m.BuyOrderId
	}
	return 0
}

func (m *Crow) GetDisputeId() uint64 {
	if m != nil {
		return m.DisputeId
	}
	return 0
}

func (m *Crow) GetVerdictId() uint64 {
	if m != nil {
		return m.VerdictId
	}
	return 0
}

func (m *Crow) GetAmount() types.Coin {
	if m != nil {
		return m.Amount
	}
	return types.Coin{}
}

func (m *Crow) GetSellerCol() types.Coin {
	if m != nil {
		return m.SellerCol
	}
	return types.Coin{}
}

func (m *Crow) GetBuyerCol() types.Coin {
	if m != nil {
		return m.BuyerCol
	}
	return types.Coin{}
}

func (m *Crow) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func (m *Crow) GetAddr() string {
	if m != nil {
		return m.Addr
	}
	return ""
}

func init() {
	proto.RegisterType((*Crow)(nil), "zeta.escrow.Crow")
}

func init() { proto.RegisterFile("escrow/crow.proto", fileDescriptor_e183fe88f92613f0) }

var fileDescriptor_e183fe88f92613f0 = []byte{
	// 316 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0x31, 0x4f, 0xc3, 0x30,
	0x10, 0x85, 0xe3, 0x12, 0x42, 0xe3, 0x4e, 0x18, 0x84, 0x4c, 0x85, 0x4c, 0xc5, 0xd4, 0x85, 0x58,
	0x85, 0x81, 0x01, 0xb1, 0xb4, 0x53, 0x26, 0xa4, 0x8e, 0x6c, 0x49, 0x6c, 0x55, 0x91, 0xda, 0x5e,
	0x65, 0x3b, 0x2d, 0xe5, 0x57, 0xf0, 0xb3, 0x3a, 0x76, 0x44, 0x42, 0x42, 0xa8, 0xf9, 0x23, 0xc8,
	0x76, 0xd4, 0x32, 0x76, 0x89, 0xee, 0xbe, 0x77, 0x2f, 0x7a, 0xf2, 0xc3, 0xe7, 0x52, 0x17, 0x0a,
	0x56, 0xdc, 0x7e, 0x92, 0x85, 0x02, 0x03, 0xa4, 0xf3, 0x21, 0x4d, 0x96, 0x78, 0xde, 0xbd, 0x9c,
	0xc0, 0x04, 0x1c, 0xe7, 0x76, 0xf2, 0x27, 0x5d, 0x56, 0x80, 0x9e, 0x81, 0xe6, 0x79, 0xa6, 0x25,
	0x5f, 0x0e, 0x72, 0x69, 0xb2, 0x01, 0x2f, 0xa0, 0x9c, 0x7b, 0xfd, 0xee, 0xbb, 0x85, 0xc3, 0x91,
	0x82, 0x15, 0xb9, 0xc2, 0x91, 0xfd, 0x4d, 0x2a, 0x28, 0xea, 0xa1, 0x7e, 0x38, 0x6e, 0x36, 0xc2,
	0x30, 0xce, 0xab, 0xf5, 0xab, 0x12, 0x52, 0xa5, 0x82, 0xb6, 0x9c, 0xf6, 0x8f, 0x90, 0x1b, 0x1c,
	0x8b, 0x52, 0x2f, 0x2a, 0x23, 0x53, 0x41, 0x4f, 0x9c, 0x7c, 0x00, 0x56, 0x5d, 0x4a, 0x25, 0xca,
	0xc2, 0xa4, 0x82, 0x86, 0x5e, 0xdd, 0x03, 0xf2, 0x84, 0xa3, 0x6c, 0x06, 0xd5, 0xdc, 0xd0, 0xd3,
	0x1e, 0xea, 0x77, 0x1e, 0xae, 0x13, 0x9f, 0x36, 0xb1, 0x69, 0x93, 0x26, 0x6d, 0x32, 0x82, 0x72,
	0x3e, 0x0c, 0x37, 0x3f, 0xb7, 0xc1, 0xb8, 0x39, 0x27, 0x2f, 0x38, 0xd6, 0x72, 0x3a, 0x95, 0x6a,
	0x04, 0x53, 0x1a, 0x1d, 0xe7, 0x3d, 0x38, 0xc8, 0x33, 0x6e, 0xe7, 0xd5, 0xda, 0xbb, 0xcf, 0x8e,
	0x73, 0xef, 0x0d, 0xf6, 0xa1, 0xb4, 0xc9, 0x4c, 0xa5, 0x69, 0xbb, 0x87, 0xfa, 0xf1, 0xb8, 0xd9,
	0x08, 0xc1, 0x61, 0x26, 0x84, 0xa2, 0xb1, 0xa3, 0x6e, 0x1e, 0xde, 0x6f, 0x76, 0x0c, 0x6d, 0x77,
	0x0c, 0xfd, 0xee, 0x18, 0xfa, 0xac, 0x59, 0xb0, 0xad, 0x59, 0xf0, 0x55, 0xb3, 0xe0, 0xed, 0xc2,
	0x56, 0xc7, 0xdf, 0x79, 0x53, 0xaa, 0x59, 0x2f, 0xa4, 0xce, 0x23, 0xd7, 0xc9, 0xe3, 0x5f, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x0e, 0xe5, 0xcc, 0xc6, 0xeb, 0x01, 0x00, 0x00,
}

func (m *Crow) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Crow) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Crow) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Addr) > 0 {
		i -= len(m.Addr)
		copy(dAtA[i:], m.Addr)
		i = encodeVarintCrow(dAtA, i, uint64(len(m.Addr)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Status) > 0 {
		i -= len(m.Status)
		copy(dAtA[i:], m.Status)
		i = encodeVarintCrow(dAtA, i, uint64(len(m.Status)))
		i--
		dAtA[i] = 0x42
	}
	{
		size, err := m.BuyerCol.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCrow(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x3a
	{
		size, err := m.SellerCol.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCrow(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	{
		size, err := m.Amount.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCrow(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if m.VerdictId != 0 {
		i = encodeVarintCrow(dAtA, i, uint64(m.VerdictId))
		i--
		dAtA[i] = 0x20
	}
	if m.DisputeId != 0 {
		i = encodeVarintCrow(dAtA, i, uint64(m.DisputeId))
		i--
		dAtA[i] = 0x18
	}
	if m.BuyOrderId != 0 {
		i = encodeVarintCrow(dAtA, i, uint64(m.BuyOrderId))
		i--
		dAtA[i] = 0x10
	}
	if m.CrowId != 0 {
		i = encodeVarintCrow(dAtA, i, uint64(m.CrowId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintCrow(dAtA []byte, offset int, v uint64) int {
	offset -= sovCrow(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Crow) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.CrowId != 0 {
		n += 1 + sovCrow(uint64(m.CrowId))
	}
	if m.BuyOrderId != 0 {
		n += 1 + sovCrow(uint64(m.BuyOrderId))
	}
	if m.DisputeId != 0 {
		n += 1 + sovCrow(uint64(m.DisputeId))
	}
	if m.VerdictId != 0 {
		n += 1 + sovCrow(uint64(m.VerdictId))
	}
	l = m.Amount.Size()
	n += 1 + l + sovCrow(uint64(l))
	l = m.SellerCol.Size()
	n += 1 + l + sovCrow(uint64(l))
	l = m.BuyerCol.Size()
	n += 1 + l + sovCrow(uint64(l))
	l = len(m.Status)
	if l > 0 {
		n += 1 + l + sovCrow(uint64(l))
	}
	l = len(m.Addr)
	if l > 0 {
		n += 1 + l + sovCrow(uint64(l))
	}
	return n
}

func sovCrow(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCrow(x uint64) (n int) {
	return sovCrow(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Crow) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCrow
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
			return fmt.Errorf("proto: Crow: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Crow: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			m.CrowId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyOrderId", wireType)
			}
			m.BuyOrderId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisputeId", wireType)
			}
			m.DisputeId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DisputeId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field VerdictId", wireType)
			}
			m.VerdictId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.VerdictId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
				return ErrInvalidLengthCrow
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCrow
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Amount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerCol", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
				return ErrInvalidLengthCrow
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCrow
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.SellerCol.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerCol", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
				return ErrInvalidLengthCrow
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCrow
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.BuyerCol.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
				return ErrInvalidLengthCrow
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCrow
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Status = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Addr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrow
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
				return ErrInvalidLengthCrow
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCrow
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Addr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCrow(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCrow
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
func skipCrow(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCrow
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
					return 0, ErrIntOverflowCrow
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
					return 0, ErrIntOverflowCrow
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
				return 0, ErrInvalidLengthCrow
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCrow
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCrow
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCrow        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCrow          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCrow = fmt.Errorf("proto: unexpected end of group")
)
