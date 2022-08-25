/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zeta.whitelist";

export interface Member {
  baseAddr: string;
  name: string;
  buyerId: number;
  sellerId: number;
  voterId: number;
}

const baseMember: object = {
  baseAddr: "",
  name: "",
  buyerId: 0,
  sellerId: 0,
  voterId: 0,
};

export const Member = {
  encode(message: Member, writer: Writer = Writer.create()): Writer {
    if (message.baseAddr !== "") {
      writer.uint32(10).string(message.baseAddr);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.buyerId !== 0) {
      writer.uint32(24).uint64(message.buyerId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(32).uint64(message.sellerId);
    }
    if (message.voterId !== 0) {
      writer.uint32(40).uint64(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMember } as Member;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAddr = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.voterId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    const message = { ...baseMember } as Member;
    if (object.baseAddr !== undefined && object.baseAddr !== null) {
      message.baseAddr = String(object.baseAddr);
    } else {
      message.baseAddr = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = Number(object.voterId);
    } else {
      message.voterId = 0;
    }
    return message;
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.baseAddr !== undefined && (obj.baseAddr = message.baseAddr);
    message.name !== undefined && (obj.name = message.name);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(object: DeepPartial<Member>): Member {
    const message = { ...baseMember } as Member;
    if (object.baseAddr !== undefined && object.baseAddr !== null) {
      message.baseAddr = object.baseAddr;
    } else {
      message.baseAddr = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = 0;
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
