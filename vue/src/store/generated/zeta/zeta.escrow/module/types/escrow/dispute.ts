/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zeta.escrow";

export interface Dispute {
  disputeId: number;
  title: string;
  description: string;
  buyerEvidence: string[];
  sellerEvidence: string[];
  votingBeginBlock: number;
  votingEndBlock: number;
  crowId: number;
  pollId: number;
  plaintiffId: number;
  defendantId: number;
}

const baseDispute: object = {
  disputeId: 0,
  title: "",
  description: "",
  buyerEvidence: "",
  sellerEvidence: "",
  votingBeginBlock: 0,
  votingEndBlock: 0,
  crowId: 0,
  pollId: 0,
  plaintiffId: 0,
  defendantId: 0,
};

export const Dispute = {
  encode(message: Dispute, writer: Writer = Writer.create()): Writer {
    if (message.disputeId !== 0) {
      writer.uint32(8).uint64(message.disputeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.buyerEvidence) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.sellerEvidence) {
      writer.uint32(42).string(v!);
    }
    if (message.votingBeginBlock !== 0) {
      writer.uint32(48).uint64(message.votingBeginBlock);
    }
    if (message.votingEndBlock !== 0) {
      writer.uint32(56).uint64(message.votingEndBlock);
    }
    if (message.crowId !== 0) {
      writer.uint32(64).uint64(message.crowId);
    }
    if (message.pollId !== 0) {
      writer.uint32(72).uint64(message.pollId);
    }
    if (message.plaintiffId !== 0) {
      writer.uint32(80).uint64(message.plaintiffId);
    }
    if (message.defendantId !== 0) {
      writer.uint32(88).uint64(message.defendantId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Dispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDispute } as Dispute;
    message.buyerEvidence = [];
    message.sellerEvidence = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.buyerEvidence.push(reader.string());
          break;
        case 5:
          message.sellerEvidence.push(reader.string());
          break;
        case 6:
          message.votingBeginBlock = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.votingEndBlock = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.plaintiffId = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.defendantId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dispute {
    const message = { ...baseDispute } as Dispute;
    message.buyerEvidence = [];
    message.sellerEvidence = [];
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.buyerEvidence !== undefined && object.buyerEvidence !== null) {
      for (const e of object.buyerEvidence) {
        message.buyerEvidence.push(String(e));
      }
    }
    if (object.sellerEvidence !== undefined && object.sellerEvidence !== null) {
      for (const e of object.sellerEvidence) {
        message.sellerEvidence.push(String(e));
      }
    }
    if (
      object.votingBeginBlock !== undefined &&
      object.votingBeginBlock !== null
    ) {
      message.votingBeginBlock = Number(object.votingBeginBlock);
    } else {
      message.votingBeginBlock = 0;
    }
    if (object.votingEndBlock !== undefined && object.votingEndBlock !== null) {
      message.votingEndBlock = Number(object.votingEndBlock);
    } else {
      message.votingEndBlock = 0;
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = Number(object.pollId);
    } else {
      message.pollId = 0;
    }
    if (object.plaintiffId !== undefined && object.plaintiffId !== null) {
      message.plaintiffId = Number(object.plaintiffId);
    } else {
      message.plaintiffId = 0;
    }
    if (object.defendantId !== undefined && object.defendantId !== null) {
      message.defendantId = Number(object.defendantId);
    } else {
      message.defendantId = 0;
    }
    return message;
  },

  toJSON(message: Dispute): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.buyerEvidence) {
      obj.buyerEvidence = message.buyerEvidence.map((e) => e);
    } else {
      obj.buyerEvidence = [];
    }
    if (message.sellerEvidence) {
      obj.sellerEvidence = message.sellerEvidence.map((e) => e);
    } else {
      obj.sellerEvidence = [];
    }
    message.votingBeginBlock !== undefined &&
      (obj.votingBeginBlock = message.votingBeginBlock);
    message.votingEndBlock !== undefined &&
      (obj.votingEndBlock = message.votingEndBlock);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.pollId !== undefined && (obj.pollId = message.pollId);
    message.plaintiffId !== undefined &&
      (obj.plaintiffId = message.plaintiffId);
    message.defendantId !== undefined &&
      (obj.defendantId = message.defendantId);
    return obj;
  },

  fromPartial(object: DeepPartial<Dispute>): Dispute {
    const message = { ...baseDispute } as Dispute;
    message.buyerEvidence = [];
    message.sellerEvidence = [];
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.buyerEvidence !== undefined && object.buyerEvidence !== null) {
      for (const e of object.buyerEvidence) {
        message.buyerEvidence.push(e);
      }
    }
    if (object.sellerEvidence !== undefined && object.sellerEvidence !== null) {
      for (const e of object.sellerEvidence) {
        message.sellerEvidence.push(e);
      }
    }
    if (
      object.votingBeginBlock !== undefined &&
      object.votingBeginBlock !== null
    ) {
      message.votingBeginBlock = object.votingBeginBlock;
    } else {
      message.votingBeginBlock = 0;
    }
    if (object.votingEndBlock !== undefined && object.votingEndBlock !== null) {
      message.votingEndBlock = object.votingEndBlock;
    } else {
      message.votingEndBlock = 0;
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    if (object.pollId !== undefined && object.pollId !== null) {
      message.pollId = object.pollId;
    } else {
      message.pollId = 0;
    }
    if (object.plaintiffId !== undefined && object.plaintiffId !== null) {
      message.plaintiffId = object.plaintiffId;
    } else {
      message.plaintiffId = 0;
    }
    if (object.defendantId !== undefined && object.defendantId !== null) {
      message.defendantId = object.defendantId;
    } else {
      message.defendantId = 0;
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
