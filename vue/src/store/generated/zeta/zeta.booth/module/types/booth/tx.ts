/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "zeta.booth";

export interface MsgBeginPoll {
  creator: string;
  disputeId: number;
}

export interface MsgBeginPollResponse {
  pollId: number;
}

const baseMsgBeginPoll: object = { creator: "", disputeId: 0 };

export const MsgBeginPoll = {
  encode(message: MsgBeginPoll, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.disputeId !== 0) {
      writer.uint32(16).uint64(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBeginPoll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBeginPoll } as MsgBeginPoll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginPoll {
    const message = { ...baseMsgBeginPoll } as MsgBeginPoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    return message;
  },

  toJSON(message: MsgBeginPoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBeginPoll>): MsgBeginPoll {
    const message = { ...baseMsgBeginPoll } as MsgBeginPoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    return message;
  },
};

const baseMsgBeginPollResponse: object = { pollId: 0 };

export const MsgBeginPollResponse = {
  encode(
    message: MsgBeginPollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pollId !== 0) {
      writer.uint32(8).uint64(message.pollId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBeginPollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBeginPollResponse } as MsgBeginPollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginPollResponse {
    const message = { ...baseMsgBeginPollResponse } as MsgBeginPollResponse;
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = Number(object.pollId);
    } else {
      message.pollId = 0;
    }
    return message;
  },

  toJSON(message: MsgBeginPollResponse): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = message.pollId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBeginPollResponse>): MsgBeginPollResponse {
    const message = { ...baseMsgBeginPollResponse } as MsgBeginPollResponse;
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = object.pollId;
    } else {
      message.pollId = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BeginPoll(request: MsgBeginPoll): Promise<MsgBeginPollResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BeginPoll(request: MsgBeginPoll): Promise<MsgBeginPollResponse> {
    const data = MsgBeginPoll.encode(request).finish();
    const promise = this.rpc.request("zeta.booth.Msg", "BeginPoll", data);
    return promise.then((data) =>
      MsgBeginPollResponse.decode(new Reader(data))
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
