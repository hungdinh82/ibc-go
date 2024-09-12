// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ibc/core/packetserver/v1/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/gogoproto/gogoproto"
	grpc1 "github.com/cosmos/gogoproto/grpc"
	proto "github.com/cosmos/gogoproto/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// QueryClientRequest is the request type for the Query/Client RPC method
type QueryClientRequest struct {
	ClientId string `protobuf:"bytes,1,opt,name=client_id,json=clientId,proto3" json:"client_id,omitempty"`
}

func (m *QueryClientRequest) Reset()         { *m = QueryClientRequest{} }
func (m *QueryClientRequest) String() string { return proto.CompactTextString(m) }
func (*QueryClientRequest) ProtoMessage()    {}
func (*QueryClientRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ac0ae50eee8e6db, []int{0}
}
func (m *QueryClientRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryClientRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryClientRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryClientRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryClientRequest.Merge(m, src)
}
func (m *QueryClientRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryClientRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryClientRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryClientRequest proto.InternalMessageInfo

func (m *QueryClientRequest) GetClientId() string {
	if m != nil {
		return m.ClientId
	}
	return ""
}

// QueryClientRequest is the response type for the Query/Client RPC method
type QueryClientResponse struct {
	Creator      string       `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Counterparty Counterparty `protobuf:"bytes,2,opt,name=counterparty,proto3" json:"counterparty"`
}

func (m *QueryClientResponse) Reset()         { *m = QueryClientResponse{} }
func (m *QueryClientResponse) String() string { return proto.CompactTextString(m) }
func (*QueryClientResponse) ProtoMessage()    {}
func (*QueryClientResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ac0ae50eee8e6db, []int{1}
}
func (m *QueryClientResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryClientResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryClientResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryClientResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryClientResponse.Merge(m, src)
}
func (m *QueryClientResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryClientResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryClientResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryClientResponse proto.InternalMessageInfo

func (m *QueryClientResponse) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *QueryClientResponse) GetCounterparty() Counterparty {
	if m != nil {
		return m.Counterparty
	}
	return Counterparty{}
}

func init() {
	proto.RegisterType((*QueryClientRequest)(nil), "ibc.core.packetserver.v1.QueryClientRequest")
	proto.RegisterType((*QueryClientResponse)(nil), "ibc.core.packetserver.v1.QueryClientResponse")
}

func init() {
	proto.RegisterFile("ibc/core/packetserver/v1/query.proto", fileDescriptor_7ac0ae50eee8e6db)
}

var fileDescriptor_7ac0ae50eee8e6db = []byte{
	// 362 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x51, 0x3d, 0x4b, 0x2b, 0x41,
	0x14, 0xdd, 0x09, 0xef, 0xe5, 0xbd, 0xcc, 0x7b, 0xd5, 0x68, 0xb1, 0x44, 0x59, 0x43, 0x10, 0x8d,
	0x68, 0x76, 0x48, 0xac, 0x04, 0xab, 0xa4, 0xb2, 0xd3, 0x14, 0x16, 0x36, 0xb2, 0x3b, 0xb9, 0xac,
	0x8b, 0xc9, 0xde, 0xcd, 0xcc, 0xec, 0x42, 0x10, 0x0b, 0xfd, 0x05, 0x82, 0x60, 0xed, 0xcf, 0x49,
	0x19, 0xb0, 0xb1, 0x12, 0x49, 0xfc, 0x21, 0xb2, 0x1f, 0x86, 0x0d, 0x12, 0xb0, 0xbb, 0x73, 0xe7,
	0x9c, 0xc3, 0x39, 0xf7, 0xd0, 0x6d, 0xdf, 0x15, 0x5c, 0xa0, 0x04, 0x1e, 0x3a, 0xe2, 0x1a, 0xb4,
	0x02, 0x19, 0x83, 0xe4, 0x71, 0x8b, 0x8f, 0x22, 0x90, 0x63, 0x3b, 0x94, 0xa8, 0x91, 0x99, 0xbe,
	0x2b, 0xec, 0x04, 0x65, 0x17, 0x51, 0x76, 0xdc, 0xaa, 0xee, 0xaf, 0xe4, 0x0b, 0x8c, 0x02, 0x0d,
	0x32, 0x74, 0xa4, 0xce, 0x65, 0xaa, 0x9b, 0x1e, 0xa2, 0x37, 0x00, 0xee, 0x84, 0x3e, 0x77, 0x82,
	0x00, 0xb5, 0xa3, 0x7d, 0x0c, 0x54, 0xfe, 0xbb, 0xee, 0xa1, 0x87, 0xe9, 0xc8, 0x93, 0x29, 0xdb,
	0xd6, 0x5b, 0x94, 0x9d, 0x25, 0x4e, 0xba, 0x03, 0x1f, 0x02, 0xdd, 0x83, 0x51, 0x04, 0x4a, 0xb3,
	0x0d, 0x5a, 0x11, 0xe9, 0xe2, 0xd2, 0xef, 0x9b, 0xa4, 0x46, 0x1a, 0x95, 0xde, 0xdf, 0x6c, 0x71,
	0xd2, 0xaf, 0xdf, 0x11, 0xba, 0xb6, 0xc4, 0x51, 0x21, 0x06, 0x0a, 0x98, 0x49, 0xff, 0x08, 0x09,
	0x8e, 0x46, 0x99, 0x53, 0xbe, 0x9e, 0xec, 0x94, 0xfe, 0x2f, 0xda, 0x35, 0x4b, 0x35, 0xd2, 0xf8,
	0xd7, 0xde, 0xb1, 0x57, 0xc5, 0xb6, 0xbb, 0x05, 0x74, 0xe7, 0xd7, 0xe4, 0x6d, 0xcb, 0xe8, 0x2d,
	0x29, 0xb4, 0x9f, 0x09, 0xfd, 0x9d, 0x7a, 0x60, 0x4f, 0x84, 0x96, 0x33, 0x23, 0xec, 0x60, 0xb5,
	0xe0, 0xf7, 0x8c, 0xd5, 0xe6, 0x0f, 0xd1, 0x59, 0xba, 0x3a, 0xbf, 0x7f, 0xf9, 0x78, 0x2c, 0xed,
	0xb1, 0x5d, 0xbe, 0xa8, 0x24, 0xbb, 0x48, 0x5a, 0x46, 0x3a, 0x29, 0x7e, 0xb3, 0xb8, 0xda, 0x6d,
	0xe7, 0x7c, 0x32, 0xb3, 0xc8, 0x74, 0x66, 0x91, 0xf7, 0x99, 0x45, 0x1e, 0xe6, 0x96, 0x31, 0x9d,
	0x5b, 0xc6, 0xeb, 0xdc, 0x32, 0x2e, 0x8e, 0x3d, 0x5f, 0x5f, 0x45, 0xae, 0x2d, 0x70, 0xc8, 0x05,
	0xaa, 0x21, 0xaa, 0x44, 0xb3, 0xe9, 0x21, 0x8f, 0x8f, 0xf8, 0x10, 0xfb, 0xd1, 0x00, 0x54, 0xb1,
	0xf4, 0x66, 0xde, 0xba, 0x1e, 0x87, 0xa0, 0xdc, 0x72, 0x5a, 0xdc, 0xe1, 0x67, 0x00, 0x00, 0x00,
	0xff, 0xff, 0x90, 0xb9, 0x8b, 0xca, 0x5b, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Client queries the counterparty of an IBC client.
	Client(ctx context.Context, in *QueryClientRequest, opts ...grpc.CallOption) (*QueryClientResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Client(ctx context.Context, in *QueryClientRequest, opts ...grpc.CallOption) (*QueryClientResponse, error) {
	out := new(QueryClientResponse)
	err := c.cc.Invoke(ctx, "/ibc.core.packetserver.v1.Query/Client", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Client queries the counterparty of an IBC client.
	Client(context.Context, *QueryClientRequest) (*QueryClientResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Client(ctx context.Context, req *QueryClientRequest) (*QueryClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Client not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Client_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Client(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ibc.core.packetserver.v1.Query/Client",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Client(ctx, req.(*QueryClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ibc.core.packetserver.v1.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Client",
			Handler:    _Query_Client_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ibc/core/packetserver/v1/query.proto",
}

func (m *QueryClientRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryClientRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryClientRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ClientId) > 0 {
		i -= len(m.ClientId)
		copy(dAtA[i:], m.ClientId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.ClientId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryClientResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryClientResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryClientResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Counterparty.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryClientRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ClientId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryClientResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	l = m.Counterparty.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryClientRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryClientRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryClientRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClientId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ClientId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryClientResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryClientResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryClientResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Counterparty", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Counterparty.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
