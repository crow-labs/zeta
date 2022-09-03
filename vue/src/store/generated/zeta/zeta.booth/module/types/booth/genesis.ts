/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../booth/params";
import { Vote } from "../booth/vote";
import { Poll } from "../booth/poll";

export const protobufPackage = "zeta.booth";

/** GenesisState defines the booth module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  voteList: Vote[];
  pollList: Poll[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  nextPollId: number;
  nextVoteId: number;
}

const baseGenesisState: object = { nextPollId: 0, nextVoteId: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pollList) {
      Poll.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextPollId !== 0) {
      writer.uint32(32).uint64(message.nextPollId);
    }
    if (message.nextVoteId !== 0) {
      writer.uint32(40).uint64(message.nextVoteId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteList.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pollList.push(Poll.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextPollId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.nextVoteId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromJSON(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromJSON(e));
      }
    }
    if (object.nextPollId !== undefined && object.nextPollId !== null) {
      message.nextPollId = Number(object.nextPollId);
    } else {
      message.nextPollId = 0;
    }
    if (object.nextVoteId !== undefined && object.nextVoteId !== null) {
      message.nextVoteId = Number(object.nextVoteId);
    } else {
      message.nextVoteId = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.voteList) {
      obj.voteList = message.voteList.map((e) =>
        e ? Vote.toJSON(e) : undefined
      );
    } else {
      obj.voteList = [];
    }
    if (message.pollList) {
      obj.pollList = message.pollList.map((e) =>
        e ? Poll.toJSON(e) : undefined
      );
    } else {
      obj.pollList = [];
    }
    message.nextPollId !== undefined && (obj.nextPollId = message.nextPollId);
    message.nextVoteId !== undefined && (obj.nextVoteId = message.nextVoteId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromPartial(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromPartial(e));
      }
    }
    if (object.nextPollId !== undefined && object.nextPollId !== null) {
      message.nextPollId = object.nextPollId;
    } else {
      message.nextPollId = 0;
    }
    if (object.nextVoteId !== undefined && object.nextVoteId !== null) {
      message.nextVoteId = object.nextVoteId;
    } else {
      message.nextVoteId = 0;
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
