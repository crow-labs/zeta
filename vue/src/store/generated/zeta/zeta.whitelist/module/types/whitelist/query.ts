/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../whitelist/params";
import { Member } from "../whitelist/member";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Buyer } from "../whitelist/buyer";
import { Seller } from "../whitelist/seller";

export const protobufPackage = "zeta.whitelist";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMemberRequest {
  baseAddr: string;
}

export interface QueryGetMemberResponse {
  member: Member | undefined;
}

export interface QueryAllMemberRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMemberResponse {
  member: Member[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBuyerRequest {
  buyerId: number;
}

export interface QueryGetBuyerResponse {
  buyer: Buyer | undefined;
}

export interface QueryAllBuyerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyerResponse {
  buyer: Buyer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSellerRequest {
  sellerId: number;
}

export interface QueryGetSellerResponse {
  seller: Seller | undefined;
}

export interface QueryAllSellerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSellerResponse {
  seller: Seller[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetMemberRequest: object = { baseAddr: "" };

export const QueryGetMemberRequest = {
  encode(
    message: QueryGetMemberRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baseAddr !== "") {
      writer.uint32(10).string(message.baseAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMemberRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMemberRequest } as QueryGetMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMemberRequest {
    const message = { ...baseQueryGetMemberRequest } as QueryGetMemberRequest;
    if (object.baseAddr !== undefined && object.baseAddr !== null) {
      message.baseAddr = String(object.baseAddr);
    } else {
      message.baseAddr = "";
    }
    return message;
  },

  toJSON(message: QueryGetMemberRequest): unknown {
    const obj: any = {};
    message.baseAddr !== undefined && (obj.baseAddr = message.baseAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMemberRequest>
  ): QueryGetMemberRequest {
    const message = { ...baseQueryGetMemberRequest } as QueryGetMemberRequest;
    if (object.baseAddr !== undefined && object.baseAddr !== null) {
      message.baseAddr = object.baseAddr;
    } else {
      message.baseAddr = "";
    }
    return message;
  },
};

const baseQueryGetMemberResponse: object = {};

export const QueryGetMemberResponse = {
  encode(
    message: QueryGetMemberResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMemberResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMemberResponse } as QueryGetMemberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMemberResponse {
    const message = { ...baseQueryGetMemberResponse } as QueryGetMemberResponse;
    if (object.member !== undefined && object.member !== null) {
      message.member = Member.fromJSON(object.member);
    } else {
      message.member = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMemberResponse>
  ): QueryGetMemberResponse {
    const message = { ...baseQueryGetMemberResponse } as QueryGetMemberResponse;
    if (object.member !== undefined && object.member !== null) {
      message.member = Member.fromPartial(object.member);
    } else {
      message.member = undefined;
    }
    return message;
  },
};

const baseQueryAllMemberRequest: object = {};

export const QueryAllMemberRequest = {
  encode(
    message: QueryAllMemberRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMemberRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMemberRequest } as QueryAllMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMemberRequest {
    const message = { ...baseQueryAllMemberRequest } as QueryAllMemberRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMemberRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMemberRequest>
  ): QueryAllMemberRequest {
    const message = { ...baseQueryAllMemberRequest } as QueryAllMemberRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMemberResponse: object = {};

export const QueryAllMemberResponse = {
  encode(
    message: QueryAllMemberResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.member) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMemberResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMemberResponse } as QueryAllMemberResponse;
    message.member = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member.push(Member.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMemberResponse {
    const message = { ...baseQueryAllMemberResponse } as QueryAllMemberResponse;
    message.member = [];
    if (object.member !== undefined && object.member !== null) {
      for (const e of object.member) {
        message.member.push(Member.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMemberResponse): unknown {
    const obj: any = {};
    if (message.member) {
      obj.member = message.member.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.member = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMemberResponse>
  ): QueryAllMemberResponse {
    const message = { ...baseQueryAllMemberResponse } as QueryAllMemberResponse;
    message.member = [];
    if (object.member !== undefined && object.member !== null) {
      for (const e of object.member) {
        message.member.push(Member.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBuyerRequest: object = { buyerId: 0 };

export const QueryGetBuyerRequest = {
  encode(
    message: QueryGetBuyerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerId !== 0) {
      writer.uint32(8).uint64(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBuyerRequest } as QueryGetBuyerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerRequest {
    const message = { ...baseQueryGetBuyerRequest } as QueryGetBuyerRequest;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBuyerRequest): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBuyerRequest>): QueryGetBuyerRequest {
    const message = { ...baseQueryGetBuyerRequest } as QueryGetBuyerRequest;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    return message;
  },
};

const baseQueryGetBuyerResponse: object = {};

export const QueryGetBuyerResponse = {
  encode(
    message: QueryGetBuyerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBuyerResponse } as QueryGetBuyerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerResponse {
    const message = { ...baseQueryGetBuyerResponse } as QueryGetBuyerResponse;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyerResponse): unknown {
    const obj: any = {};
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerResponse>
  ): QueryGetBuyerResponse {
    const message = { ...baseQueryGetBuyerResponse } as QueryGetBuyerResponse;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerRequest: object = {};

export const QueryAllBuyerRequest = {
  encode(
    message: QueryAllBuyerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBuyerRequest } as QueryAllBuyerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyerRequest {
    const message = { ...baseQueryAllBuyerRequest } as QueryAllBuyerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBuyerRequest>): QueryAllBuyerRequest {
    const message = { ...baseQueryAllBuyerRequest } as QueryAllBuyerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerResponse: object = {};

export const QueryAllBuyerResponse = {
  encode(
    message: QueryAllBuyerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyer) {
      Buyer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBuyerResponse } as QueryAllBuyerResponse;
    message.buyer = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer.push(Buyer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyerResponse {
    const message = { ...baseQueryAllBuyerResponse } as QueryAllBuyerResponse;
    message.buyer = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      for (const e of object.buyer) {
        message.buyer.push(Buyer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerResponse): unknown {
    const obj: any = {};
    if (message.buyer) {
      obj.buyer = message.buyer.map((e) => (e ? Buyer.toJSON(e) : undefined));
    } else {
      obj.buyer = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerResponse>
  ): QueryAllBuyerResponse {
    const message = { ...baseQueryAllBuyerResponse } as QueryAllBuyerResponse;
    message.buyer = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      for (const e of object.buyer) {
        message.buyer.push(Buyer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSellerRequest: object = { sellerId: 0 };

export const QueryGetSellerRequest = {
  encode(
    message: QueryGetSellerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerId !== 0) {
      writer.uint32(8).uint64(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSellerRequest } as QueryGetSellerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerRequest {
    const message = { ...baseQueryGetSellerRequest } as QueryGetSellerRequest;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSellerRequest): unknown {
    const obj: any = {};
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerRequest>
  ): QueryGetSellerRequest {
    const message = { ...baseQueryGetSellerRequest } as QueryGetSellerRequest;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    return message;
  },
};

const baseQueryGetSellerResponse: object = {};

export const QueryGetSellerResponse = {
  encode(
    message: QueryGetSellerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSellerResponse } as QueryGetSellerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = Seller.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerResponse {
    const message = { ...baseQueryGetSellerResponse } as QueryGetSellerResponse;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromJSON(object.seller);
    } else {
      message.seller = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSellerResponse): unknown {
    const obj: any = {};
    message.seller !== undefined &&
      (obj.seller = message.seller ? Seller.toJSON(message.seller) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerResponse>
  ): QueryGetSellerResponse {
    const message = { ...baseQueryGetSellerResponse } as QueryGetSellerResponse;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromPartial(object.seller);
    } else {
      message.seller = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerRequest: object = {};

export const QueryAllSellerRequest = {
  encode(
    message: QueryAllSellerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSellerRequest } as QueryAllSellerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellerRequest {
    const message = { ...baseQueryAllSellerRequest } as QueryAllSellerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerRequest>
  ): QueryAllSellerRequest {
    const message = { ...baseQueryAllSellerRequest } as QueryAllSellerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerResponse: object = {};

export const QueryAllSellerResponse = {
  encode(
    message: QueryAllSellerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.seller) {
      Seller.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSellerResponse } as QueryAllSellerResponse;
    message.seller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller.push(Seller.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellerResponse {
    const message = { ...baseQueryAllSellerResponse } as QueryAllSellerResponse;
    message.seller = [];
    if (object.seller !== undefined && object.seller !== null) {
      for (const e of object.seller) {
        message.seller.push(Seller.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerResponse): unknown {
    const obj: any = {};
    if (message.seller) {
      obj.seller = message.seller.map((e) =>
        e ? Seller.toJSON(e) : undefined
      );
    } else {
      obj.seller = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerResponse>
  ): QueryAllSellerResponse {
    const message = { ...baseQueryAllSellerResponse } as QueryAllSellerResponse;
    message.seller = [];
    if (object.seller !== undefined && object.seller !== null) {
      for (const e of object.seller) {
        message.seller.push(Seller.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Member by index. */
  Member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
  /** Queries a list of Member items. */
  MemberAll(request: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
  /** Queries a Buyer by index. */
  Buyer(request: QueryGetBuyerRequest): Promise<QueryGetBuyerResponse>;
  /** Queries a list of Buyer items. */
  BuyerAll(request: QueryAllBuyerRequest): Promise<QueryAllBuyerResponse>;
  /** Queries a Seller by index. */
  Seller(request: QueryGetSellerRequest): Promise<QueryGetSellerResponse>;
  /** Queries a list of Seller items. */
  SellerAll(request: QueryAllSellerRequest): Promise<QueryAllSellerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse> {
    const data = QueryGetMemberRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "Member", data);
    return promise.then((data) =>
      QueryGetMemberResponse.decode(new Reader(data))
    );
  }

  MemberAll(request: QueryAllMemberRequest): Promise<QueryAllMemberResponse> {
    const data = QueryAllMemberRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "MemberAll", data);
    return promise.then((data) =>
      QueryAllMemberResponse.decode(new Reader(data))
    );
  }

  Buyer(request: QueryGetBuyerRequest): Promise<QueryGetBuyerResponse> {
    const data = QueryGetBuyerRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "Buyer", data);
    return promise.then((data) =>
      QueryGetBuyerResponse.decode(new Reader(data))
    );
  }

  BuyerAll(request: QueryAllBuyerRequest): Promise<QueryAllBuyerResponse> {
    const data = QueryAllBuyerRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "BuyerAll", data);
    return promise.then((data) =>
      QueryAllBuyerResponse.decode(new Reader(data))
    );
  }

  Seller(request: QueryGetSellerRequest): Promise<QueryGetSellerResponse> {
    const data = QueryGetSellerRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "Seller", data);
    return promise.then((data) =>
      QueryGetSellerResponse.decode(new Reader(data))
    );
  }

  SellerAll(request: QueryAllSellerRequest): Promise<QueryAllSellerResponse> {
    const data = QueryAllSellerRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.whitelist.Query", "SellerAll", data);
    return promise.then((data) =>
      QueryAllSellerResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
