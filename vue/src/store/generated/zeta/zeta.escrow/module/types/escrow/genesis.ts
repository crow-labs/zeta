/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../escrow/params";
import { Crow } from "../escrow/crow";
import { Dispute } from "../escrow/dispute";

export const protobufPackage = "zeta.escrow";

/** GenesisState defines the escrow module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  crowList: Crow[];
  disputeList: Dispute[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  nextCrowId: number;
  nextDisputeId: number;
  nextVoteId: number;
  nextVerdictId: number;
}

const baseGenesisState: object = {
  nextCrowId: 0,
  nextDisputeId: 0,
  nextVoteId: 0,
  nextVerdictId: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.crowList) {
      Crow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.disputeList) {
      Dispute.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nextCrowId !== 0) {
      writer.uint32(24).uint64(message.nextCrowId);
    }
    if (message.nextDisputeId !== 0) {
      writer.uint32(32).uint64(message.nextDisputeId);
    }
    if (message.nextVoteId !== 0) {
      writer.uint32(40).uint64(message.nextVoteId);
    }
    if (message.nextVerdictId !== 0) {
      writer.uint32(48).uint64(message.nextVerdictId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.crowList = [];
    message.disputeList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.crowList.push(Crow.decode(reader, reader.uint32()));
          break;
        case 7:
          message.disputeList.push(Dispute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextCrowId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.nextDisputeId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.nextVoteId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.nextVerdictId = longToNumber(reader.uint64() as Long);
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
    message.crowList = [];
    message.disputeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.crowList !== undefined && object.crowList !== null) {
      for (const e of object.crowList) {
        message.crowList.push(Crow.fromJSON(e));
      }
    }
    if (object.disputeList !== undefined && object.disputeList !== null) {
      for (const e of object.disputeList) {
        message.disputeList.push(Dispute.fromJSON(e));
      }
    }
    if (object.nextCrowId !== undefined && object.nextCrowId !== null) {
      message.nextCrowId = Number(object.nextCrowId);
    } else {
      message.nextCrowId = 0;
    }
    if (object.nextDisputeId !== undefined && object.nextDisputeId !== null) {
      message.nextDisputeId = Number(object.nextDisputeId);
    } else {
      message.nextDisputeId = 0;
    }
    if (object.nextVoteId !== undefined && object.nextVoteId !== null) {
      message.nextVoteId = Number(object.nextVoteId);
    } else {
      message.nextVoteId = 0;
    }
    if (object.nextVerdictId !== undefined && object.nextVerdictId !== null) {
      message.nextVerdictId = Number(object.nextVerdictId);
    } else {
      message.nextVerdictId = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.crowList) {
      obj.crowList = message.crowList.map((e) =>
        e ? Crow.toJSON(e) : undefined
      );
    } else {
      obj.crowList = [];
    }
    if (message.disputeList) {
      obj.disputeList = message.disputeList.map((e) =>
        e ? Dispute.toJSON(e) : undefined
      );
    } else {
      obj.disputeList = [];
    }
    message.nextCrowId !== undefined && (obj.nextCrowId = message.nextCrowId);
    message.nextDisputeId !== undefined &&
      (obj.nextDisputeId = message.nextDisputeId);
    message.nextVoteId !== undefined && (obj.nextVoteId = message.nextVoteId);
    message.nextVerdictId !== undefined &&
      (obj.nextVerdictId = message.nextVerdictId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.crowList = [];
    message.disputeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.crowList !== undefined && object.crowList !== null) {
      for (const e of object.crowList) {
        message.crowList.push(Crow.fromPartial(e));
      }
    }
    if (object.disputeList !== undefined && object.disputeList !== null) {
      for (const e of object.disputeList) {
        message.disputeList.push(Dispute.fromPartial(e));
      }
    }
    if (object.nextCrowId !== undefined && object.nextCrowId !== null) {
      message.nextCrowId = object.nextCrowId;
    } else {
      message.nextCrowId = 0;
    }
    if (object.nextDisputeId !== undefined && object.nextDisputeId !== null) {
      message.nextDisputeId = object.nextDisputeId;
    } else {
      message.nextDisputeId = 0;
    }
    if (object.nextVoteId !== undefined && object.nextVoteId !== null) {
      message.nextVoteId = object.nextVoteId;
    } else {
      message.nextVoteId = 0;
    }
    if (object.nextVerdictId !== undefined && object.nextVerdictId !== null) {
      message.nextVerdictId = object.nextVerdictId;
    } else {
      message.nextVerdictId = 0;
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
