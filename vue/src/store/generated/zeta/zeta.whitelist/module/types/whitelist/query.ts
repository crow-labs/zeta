/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../whitelist/params";
import { Member } from "../whitelist/member";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Member by index. */
  Member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
  /** Queries a list of Member items. */
  MemberAll(request: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
