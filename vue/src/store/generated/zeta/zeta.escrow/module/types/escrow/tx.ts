/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "zeta.escrow";

export interface MsgBeginEscrow {
  creator: string;
  buyOrderId: number;
}

export interface MsgBeginEscrowResponse {
  crowId: number;
}

export interface MsgJoinEscrow {
  creator: string;
  crowId: number;
}

export interface MsgJoinEscrowResponse {}

export interface MsgCompleteEscrowNoDispute {
  creator: string;
  crowId: number;
}

export interface MsgCompleteEscrowNoDisputeResponse {}

const baseMsgBeginEscrow: object = { creator: "", buyOrderId: 0 };

export const MsgBeginEscrow = {
  encode(message: MsgBeginEscrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyOrderId !== 0) {
      writer.uint32(16).uint64(message.buyOrderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBeginEscrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBeginEscrow } as MsgBeginEscrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginEscrow {
    const message = { ...baseMsgBeginEscrow } as MsgBeginEscrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    return message;
  },

  toJSON(message: MsgBeginEscrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBeginEscrow>): MsgBeginEscrow {
    const message = { ...baseMsgBeginEscrow } as MsgBeginEscrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    return message;
  },
};

const baseMsgBeginEscrowResponse: object = { crowId: 0 };

export const MsgBeginEscrowResponse = {
  encode(
    message: MsgBeginEscrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== 0) {
      writer.uint32(8).uint64(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBeginEscrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBeginEscrowResponse } as MsgBeginEscrowResponse;
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

  fromJSON(object: any): MsgBeginEscrowResponse {
    const message = { ...baseMsgBeginEscrowResponse } as MsgBeginEscrowResponse;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    return message;
  },

  toJSON(message: MsgBeginEscrowResponse): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBeginEscrowResponse>
  ): MsgBeginEscrowResponse {
    const message = { ...baseMsgBeginEscrowResponse } as MsgBeginEscrowResponse;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    return message;
  },
};

const baseMsgJoinEscrow: object = { creator: "", crowId: 0 };

export const MsgJoinEscrow = {
  encode(message: MsgJoinEscrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinEscrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinEscrow } as MsgJoinEscrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinEscrow {
    const message = { ...baseMsgJoinEscrow } as MsgJoinEscrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    return message;
  },

  toJSON(message: MsgJoinEscrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgJoinEscrow>): MsgJoinEscrow {
    const message = { ...baseMsgJoinEscrow } as MsgJoinEscrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    return message;
  },
};

const baseMsgJoinEscrowResponse: object = {};

export const MsgJoinEscrowResponse = {
  encode(_: MsgJoinEscrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinEscrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinEscrowResponse } as MsgJoinEscrowResponse;
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

  fromJSON(_: any): MsgJoinEscrowResponse {
    const message = { ...baseMsgJoinEscrowResponse } as MsgJoinEscrowResponse;
    return message;
  },

  toJSON(_: MsgJoinEscrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgJoinEscrowResponse>): MsgJoinEscrowResponse {
    const message = { ...baseMsgJoinEscrowResponse } as MsgJoinEscrowResponse;
    return message;
  },
};

const baseMsgCompleteEscrowNoDispute: object = { creator: "", crowId: 0 };

export const MsgCompleteEscrowNoDispute = {
  encode(
    message: MsgCompleteEscrowNoDispute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompleteEscrowNoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteEscrowNoDispute,
    } as MsgCompleteEscrowNoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCompleteEscrowNoDispute {
    const message = {
      ...baseMsgCompleteEscrowNoDispute,
    } as MsgCompleteEscrowNoDispute;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    return message;
  },

  toJSON(message: MsgCompleteEscrowNoDispute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCompleteEscrowNoDispute>
  ): MsgCompleteEscrowNoDispute {
    const message = {
      ...baseMsgCompleteEscrowNoDispute,
    } as MsgCompleteEscrowNoDispute;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    return message;
  },
};

const baseMsgCompleteEscrowNoDisputeResponse: object = {};

export const MsgCompleteEscrowNoDisputeResponse = {
  encode(
    _: MsgCompleteEscrowNoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompleteEscrowNoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteEscrowNoDisputeResponse,
    } as MsgCompleteEscrowNoDisputeResponse;
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

  fromJSON(_: any): MsgCompleteEscrowNoDisputeResponse {
    const message = {
      ...baseMsgCompleteEscrowNoDisputeResponse,
    } as MsgCompleteEscrowNoDisputeResponse;
    return message;
  },

  toJSON(_: MsgCompleteEscrowNoDisputeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCompleteEscrowNoDisputeResponse>
  ): MsgCompleteEscrowNoDisputeResponse {
    const message = {
      ...baseMsgCompleteEscrowNoDisputeResponse,
    } as MsgCompleteEscrowNoDisputeResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BeginEscrow(request: MsgBeginEscrow): Promise<MsgBeginEscrowResponse>;
  JoinEscrow(request: MsgJoinEscrow): Promise<MsgJoinEscrowResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CompleteEscrowNoDispute(
    request: MsgCompleteEscrowNoDispute
  ): Promise<MsgCompleteEscrowNoDisputeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BeginEscrow(request: MsgBeginEscrow): Promise<MsgBeginEscrowResponse> {
    const data = MsgBeginEscrow.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Msg", "BeginEscrow", data);
    return promise.then((data) =>
      MsgBeginEscrowResponse.decode(new Reader(data))
    );
  }

  JoinEscrow(request: MsgJoinEscrow): Promise<MsgJoinEscrowResponse> {
    const data = MsgJoinEscrow.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Msg", "JoinEscrow", data);
    return promise.then((data) =>
      MsgJoinEscrowResponse.decode(new Reader(data))
    );
  }

  CompleteEscrowNoDispute(
    request: MsgCompleteEscrowNoDispute
  ): Promise<MsgCompleteEscrowNoDisputeResponse> {
    const data = MsgCompleteEscrowNoDispute.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.escrow.Msg",
      "CompleteEscrowNoDispute",
      data
    );
    return promise.then((data) =>
      MsgCompleteEscrowNoDisputeResponse.decode(new Reader(data))
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
