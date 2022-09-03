/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { VoteParams } from "../booth/vote_params";

export const protobufPackage = "zeta.booth";

export interface MsgBeginPoll {
  creator: string;
  disputeId: number;
}

export interface MsgBeginPollResponse {
  pollId: number;
}

export interface MsgCastVoteForPoll {
  creator: string;
  pollId: number;
  voterId: number;
  ballot: VoteParams | undefined;
}

export interface MsgCastVoteForPollResponse {
  voteId: number;
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

const baseMsgCastVoteForPoll: object = { creator: "", pollId: 0, voterId: 0 };

export const MsgCastVoteForPoll = {
  encode(
    message: MsgCastVoteForPoll,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pollId !== 0) {
      writer.uint32(16).uint64(message.pollId);
    }
    if (message.voterId !== 0) {
      writer.uint32(24).uint64(message.voterId);
    }
    if (message.ballot !== undefined) {
      VoteParams.encode(message.ballot, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCastVoteForPoll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCastVoteForPoll } as MsgCastVoteForPoll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.voterId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.ballot = VoteParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCastVoteForPoll {
    const message = { ...baseMsgCastVoteForPoll } as MsgCastVoteForPoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = Number(object.pollId);
    } else {
      message.pollId = 0;
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = Number(object.voterId);
    } else {
      message.voterId = 0;
    }
    if (object.ballot !== undefined && object.ballot !== null) {
      message.ballot = VoteParams.fromJSON(object.ballot);
    } else {
      message.ballot = undefined;
    }
    return message;
  },

  toJSON(message: MsgCastVoteForPoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pollId !== undefined && (obj.pollId = message.pollId);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.ballot !== undefined &&
      (obj.ballot = message.ballot
        ? VoteParams.toJSON(message.ballot)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCastVoteForPoll>): MsgCastVoteForPoll {
    const message = { ...baseMsgCastVoteForPoll } as MsgCastVoteForPoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = object.pollId;
    } else {
      message.pollId = 0;
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = 0;
    }
    if (object.ballot !== undefined && object.ballot !== null) {
      message.ballot = VoteParams.fromPartial(object.ballot);
    } else {
      message.ballot = undefined;
    }
    return message;
  },
};

const baseMsgCastVoteForPollResponse: object = { voteId: 0 };

export const MsgCastVoteForPollResponse = {
  encode(
    message: MsgCastVoteForPollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voteId !== 0) {
      writer.uint32(8).uint64(message.voteId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCastVoteForPollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCastVoteForPollResponse,
    } as MsgCastVoteForPollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCastVoteForPollResponse {
    const message = {
      ...baseMsgCastVoteForPollResponse,
    } as MsgCastVoteForPollResponse;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = Number(object.voteId);
    } else {
      message.voteId = 0;
    }
    return message;
  },

  toJSON(message: MsgCastVoteForPollResponse): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCastVoteForPollResponse>
  ): MsgCastVoteForPollResponse {
    const message = {
      ...baseMsgCastVoteForPollResponse,
    } as MsgCastVoteForPollResponse;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BeginPoll(request: MsgBeginPoll): Promise<MsgBeginPollResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CastVoteForPoll(
    request: MsgCastVoteForPoll
  ): Promise<MsgCastVoteForPollResponse>;
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

  CastVoteForPoll(
    request: MsgCastVoteForPoll
  ): Promise<MsgCastVoteForPollResponse> {
    const data = MsgCastVoteForPoll.encode(request).finish();
    const promise = this.rpc.request("zeta.booth.Msg", "CastVoteForPoll", data);
    return promise.then((data) =>
      MsgCastVoteForPollResponse.decode(new Reader(data))
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
