/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../escrow/params";
import { Crow } from "../escrow/crow";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Dispute } from "../escrow/dispute";

export const protobufPackage = "zeta.escrow";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCrowRequest {
  crowId: number;
}

export interface QueryGetCrowResponse {
  crow: Crow | undefined;
}

export interface QueryAllCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCrowResponse {
  crow: Crow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDisputeRequest {
  disputeId: number;
}

export interface QueryGetDisputeResponse {
  dispute: Dispute | undefined;
}

export interface QueryAllDisputeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDisputeResponse {
  dispute: Dispute[];
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

const baseQueryGetCrowRequest: object = { crowId: 0 };

export const QueryGetCrowRequest = {
  encode(
    message: QueryGetCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== 0) {
      writer.uint32(8).uint64(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCrowRequest {
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCrowRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCrowRequest>): QueryGetCrowRequest {
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    return message;
  },
};

const baseQueryGetCrowResponse: object = {};

export const QueryGetCrowResponse = {
  encode(
    message: QueryGetCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crow !== undefined) {
      Crow.encode(message.crow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crow = Crow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCrowResponse {
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    if (object.crow !== undefined && object.crow !== null) {
      message.crow = Crow.fromJSON(object.crow);
    } else {
      message.crow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCrowResponse): unknown {
    const obj: any = {};
    message.crow !== undefined &&
      (obj.crow = message.crow ? Crow.toJSON(message.crow) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCrowResponse>): QueryGetCrowResponse {
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    if (object.crow !== undefined && object.crow !== null) {
      message.crow = Crow.fromPartial(object.crow);
    } else {
      message.crow = undefined;
    }
    return message;
  },
};

const baseQueryAllCrowRequest: object = {};

export const QueryAllCrowRequest = {
  encode(
    message: QueryAllCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
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

  fromJSON(object: any): QueryAllCrowRequest {
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCrowRequest>): QueryAllCrowRequest {
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCrowResponse: object = {};

export const QueryAllCrowResponse = {
  encode(
    message: QueryAllCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.crow) {
      Crow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crow.push(Crow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCrowResponse {
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    if (object.crow !== undefined && object.crow !== null) {
      for (const e of object.crow) {
        message.crow.push(Crow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCrowResponse): unknown {
    const obj: any = {};
    if (message.crow) {
      obj.crow = message.crow.map((e) => (e ? Crow.toJSON(e) : undefined));
    } else {
      obj.crow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCrowResponse>): QueryAllCrowResponse {
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    if (object.crow !== undefined && object.crow !== null) {
      for (const e of object.crow) {
        message.crow.push(Crow.fromPartial(e));
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

const baseQueryGetDisputeRequest: object = { disputeId: 0 };

export const QueryGetDisputeRequest = {
  encode(
    message: QueryGetDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.disputeId !== 0) {
      writer.uint32(8).uint64(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDisputeRequest {
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDisputeRequest): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDisputeRequest>
  ): QueryGetDisputeRequest {
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    return message;
  },
};

const baseQueryGetDisputeResponse: object = {};

export const QueryGetDisputeResponse = {
  encode(
    message: QueryGetDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute = Dispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDisputeResponse {
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromJSON(object.dispute);
    } else {
      message.dispute = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDisputeResponse): unknown {
    const obj: any = {};
    message.dispute !== undefined &&
      (obj.dispute = message.dispute
        ? Dispute.toJSON(message.dispute)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDisputeResponse>
  ): QueryGetDisputeResponse {
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromPartial(object.dispute);
    } else {
      message.dispute = undefined;
    }
    return message;
  },
};

const baseQueryAllDisputeRequest: object = {};

export const QueryAllDisputeRequest = {
  encode(
    message: QueryAllDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
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

  fromJSON(object: any): QueryAllDisputeRequest {
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDisputeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDisputeRequest>
  ): QueryAllDisputeRequest {
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDisputeResponse: object = {};

export const QueryAllDisputeResponse = {
  encode(
    message: QueryAllDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.dispute) {
      Dispute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute.push(Dispute.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllDisputeResponse {
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    if (object.dispute !== undefined && object.dispute !== null) {
      for (const e of object.dispute) {
        message.dispute.push(Dispute.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDisputeResponse): unknown {
    const obj: any = {};
    if (message.dispute) {
      obj.dispute = message.dispute.map((e) =>
        e ? Dispute.toJSON(e) : undefined
      );
    } else {
      obj.dispute = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDisputeResponse>
  ): QueryAllDisputeResponse {
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    if (object.dispute !== undefined && object.dispute !== null) {
      for (const e of object.dispute) {
        message.dispute.push(Dispute.fromPartial(e));
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
  /** Queries a Crow by index. */
  Crow(request: QueryGetCrowRequest): Promise<QueryGetCrowResponse>;
  /** Queries a list of Crow items. */
  CrowAll(request: QueryAllCrowRequest): Promise<QueryAllCrowResponse>;
  /** Queries a Dispute by index. */
  Dispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse>;
  /** Queries a list of Dispute items. */
  DisputeAll(request: QueryAllDisputeRequest): Promise<QueryAllDisputeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Crow(request: QueryGetCrowRequest): Promise<QueryGetCrowResponse> {
    const data = QueryGetCrowRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Query", "Crow", data);
    return promise.then((data) =>
      QueryGetCrowResponse.decode(new Reader(data))
    );
  }

  CrowAll(request: QueryAllCrowRequest): Promise<QueryAllCrowResponse> {
    const data = QueryAllCrowRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Query", "CrowAll", data);
    return promise.then((data) =>
      QueryAllCrowResponse.decode(new Reader(data))
    );
  }

  Dispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse> {
    const data = QueryGetDisputeRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Query", "Dispute", data);
    return promise.then((data) =>
      QueryGetDisputeResponse.decode(new Reader(data))
    );
  }

  DisputeAll(
    request: QueryAllDisputeRequest
  ): Promise<QueryAllDisputeResponse> {
    const data = QueryAllDisputeRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Query", "DisputeAll", data);
    return promise.then((data) =>
      QueryAllDisputeResponse.decode(new Reader(data))
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
