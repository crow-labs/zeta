/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { VoteParams } from "../booth/vote_params";

export const protobufPackage = "zeta.booth";

export interface Vote {
  voteId: number;
  pollId: number;
  voterId: number;
  ballot: VoteParams | undefined;
}

const baseVote: object = { voteId: 0, pollId: 0, voterId: 0 };

export const Vote = {
  encode(message: Vote, writer: Writer = Writer.create()): Writer {
    if (message.voteId !== 0) {
      writer.uint32(8).uint64(message.voteId);
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

  decode(input: Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = Number(object.voteId);
    } else {
      message.voteId = 0;
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

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.pollId !== undefined && (obj.pollId = message.pollId);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.ballot !== undefined &&
      (obj.ballot = message.ballot
        ? VoteParams.toJSON(message.ballot)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = 0;
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
