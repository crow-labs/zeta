/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { VoteParams } from "../booth/vote_params";

export const protobufPackage = "zeta.booth";

export interface Poll {
  pollId: number;
  pollAccAddr: string;
  votingPower: string;
  disputeId: number;
  voteIds: number[];
  verdict: VoteParams | undefined;
  funding: string;
}

const basePoll: object = {
  pollId: 0,
  pollAccAddr: "",
  votingPower: "",
  disputeId: 0,
  voteIds: 0,
  funding: "",
};

export const Poll = {
  encode(message: Poll, writer: Writer = Writer.create()): Writer {
    if (message.pollId !== 0) {
      writer.uint32(8).uint64(message.pollId);
    }
    if (message.pollAccAddr !== "") {
      writer.uint32(18).string(message.pollAccAddr);
    }
    if (message.votingPower !== "") {
      writer.uint32(26).string(message.votingPower);
    }
    if (message.disputeId !== 0) {
      writer.uint32(32).uint64(message.disputeId);
    }
    writer.uint32(42).fork();
    for (const v of message.voteIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.verdict !== undefined) {
      VoteParams.encode(message.verdict, writer.uint32(50).fork()).ldelim();
    }
    if (message.funding !== "") {
      writer.uint32(58).string(message.funding);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Poll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoll } as Poll;
    message.voteIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pollAccAddr = reader.string();
          break;
        case 3:
          message.votingPower = reader.string();
          break;
        case 4:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.voteIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.voteIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 6:
          message.verdict = VoteParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.funding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Poll {
    const message = { ...basePoll } as Poll;
    message.voteIds = [];
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = Number(object.pollId);
    } else {
      message.pollId = 0;
    }
    if (object.pollAccAddr !== undefined && object.pollAccAddr !== null) {
      message.pollAccAddr = String(object.pollAccAddr);
    } else {
      message.pollAccAddr = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = String(object.votingPower);
    } else {
      message.votingPower = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(Number(e));
      }
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = VoteParams.fromJSON(object.verdict);
    } else {
      message.verdict = undefined;
    }
    if (object.funding !== undefined && object.funding !== null) {
      message.funding = String(object.funding);
    } else {
      message.funding = "";
    }
    return message;
  },

  toJSON(message: Poll): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = message.pollId);
    message.pollAccAddr !== undefined &&
      (obj.pollAccAddr = message.pollAccAddr);
    message.votingPower !== undefined &&
      (obj.votingPower = message.votingPower);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    if (message.voteIds) {
      obj.voteIds = message.voteIds.map((e) => e);
    } else {
      obj.voteIds = [];
    }
    message.verdict !== undefined &&
      (obj.verdict = message.verdict
        ? VoteParams.toJSON(message.verdict)
        : undefined);
    message.funding !== undefined && (obj.funding = message.funding);
    return obj;
  },

  fromPartial(object: DeepPartial<Poll>): Poll {
    const message = { ...basePoll } as Poll;
    message.voteIds = [];
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = object.pollId;
    } else {
      message.pollId = 0;
    }
    if (object.pollAccAddr !== undefined && object.pollAccAddr !== null) {
      message.pollAccAddr = object.pollAccAddr;
    } else {
      message.pollAccAddr = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower;
    } else {
      message.votingPower = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(e);
      }
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = VoteParams.fromPartial(object.verdict);
    } else {
      message.verdict = undefined;
    }
    if (object.funding !== undefined && object.funding !== null) {
      message.funding = object.funding;
    } else {
      message.funding = "";
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
