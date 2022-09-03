/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "zeta.booth";

export interface VoteParams {
  buyerGuilt: boolean;
  sellerGuilt: boolean;
  buyerReturn: Coin | undefined;
  buyerJailTime: number;
  sellerJailtime: number;
  buyerBlacklist: boolean;
  sellerBlacklist: boolean;
}

const baseVoteParams: object = {
  buyerGuilt: false,
  sellerGuilt: false,
  buyerJailTime: 0,
  sellerJailtime: 0,
  buyerBlacklist: false,
  sellerBlacklist: false,
};

export const VoteParams = {
  encode(message: VoteParams, writer: Writer = Writer.create()): Writer {
    if (message.buyerGuilt === true) {
      writer.uint32(8).bool(message.buyerGuilt);
    }
    if (message.sellerGuilt === true) {
      writer.uint32(16).bool(message.sellerGuilt);
    }
    if (message.buyerReturn !== undefined) {
      Coin.encode(message.buyerReturn, writer.uint32(26).fork()).ldelim();
    }
    if (message.buyerJailTime !== 0) {
      writer.uint32(32).uint64(message.buyerJailTime);
    }
    if (message.sellerJailtime !== 0) {
      writer.uint32(40).uint64(message.sellerJailtime);
    }
    if (message.buyerBlacklist === true) {
      writer.uint32(48).bool(message.buyerBlacklist);
    }
    if (message.sellerBlacklist === true) {
      writer.uint32(56).bool(message.sellerBlacklist);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VoteParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteParams } as VoteParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerGuilt = reader.bool();
          break;
        case 2:
          message.sellerGuilt = reader.bool();
          break;
        case 3:
          message.buyerReturn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.buyerJailTime = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.sellerJailtime = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.buyerBlacklist = reader.bool();
          break;
        case 7:
          message.sellerBlacklist = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteParams {
    const message = { ...baseVoteParams } as VoteParams;
    if (object.buyerGuilt !== undefined && object.buyerGuilt !== null) {
      message.buyerGuilt = Boolean(object.buyerGuilt);
    } else {
      message.buyerGuilt = false;
    }
    if (object.sellerGuilt !== undefined && object.sellerGuilt !== null) {
      message.sellerGuilt = Boolean(object.sellerGuilt);
    } else {
      message.sellerGuilt = false;
    }
    if (object.buyerReturn !== undefined && object.buyerReturn !== null) {
      message.buyerReturn = Coin.fromJSON(object.buyerReturn);
    } else {
      message.buyerReturn = undefined;
    }
    if (object.buyerJailTime !== undefined && object.buyerJailTime !== null) {
      message.buyerJailTime = Number(object.buyerJailTime);
    } else {
      message.buyerJailTime = 0;
    }
    if (object.sellerJailtime !== undefined && object.sellerJailtime !== null) {
      message.sellerJailtime = Number(object.sellerJailtime);
    } else {
      message.sellerJailtime = 0;
    }
    if (object.buyerBlacklist !== undefined && object.buyerBlacklist !== null) {
      message.buyerBlacklist = Boolean(object.buyerBlacklist);
    } else {
      message.buyerBlacklist = false;
    }
    if (
      object.sellerBlacklist !== undefined &&
      object.sellerBlacklist !== null
    ) {
      message.sellerBlacklist = Boolean(object.sellerBlacklist);
    } else {
      message.sellerBlacklist = false;
    }
    return message;
  },

  toJSON(message: VoteParams): unknown {
    const obj: any = {};
    message.buyerGuilt !== undefined && (obj.buyerGuilt = message.buyerGuilt);
    message.sellerGuilt !== undefined &&
      (obj.sellerGuilt = message.sellerGuilt);
    message.buyerReturn !== undefined &&
      (obj.buyerReturn = message.buyerReturn
        ? Coin.toJSON(message.buyerReturn)
        : undefined);
    message.buyerJailTime !== undefined &&
      (obj.buyerJailTime = message.buyerJailTime);
    message.sellerJailtime !== undefined &&
      (obj.sellerJailtime = message.sellerJailtime);
    message.buyerBlacklist !== undefined &&
      (obj.buyerBlacklist = message.buyerBlacklist);
    message.sellerBlacklist !== undefined &&
      (obj.sellerBlacklist = message.sellerBlacklist);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteParams>): VoteParams {
    const message = { ...baseVoteParams } as VoteParams;
    if (object.buyerGuilt !== undefined && object.buyerGuilt !== null) {
      message.buyerGuilt = object.buyerGuilt;
    } else {
      message.buyerGuilt = false;
    }
    if (object.sellerGuilt !== undefined && object.sellerGuilt !== null) {
      message.sellerGuilt = object.sellerGuilt;
    } else {
      message.sellerGuilt = false;
    }
    if (object.buyerReturn !== undefined && object.buyerReturn !== null) {
      message.buyerReturn = Coin.fromPartial(object.buyerReturn);
    } else {
      message.buyerReturn = undefined;
    }
    if (object.buyerJailTime !== undefined && object.buyerJailTime !== null) {
      message.buyerJailTime = object.buyerJailTime;
    } else {
      message.buyerJailTime = 0;
    }
    if (object.sellerJailtime !== undefined && object.sellerJailtime !== null) {
      message.sellerJailtime = object.sellerJailtime;
    } else {
      message.sellerJailtime = 0;
    }
    if (object.buyerBlacklist !== undefined && object.buyerBlacklist !== null) {
      message.buyerBlacklist = object.buyerBlacklist;
    } else {
      message.buyerBlacklist = false;
    }
    if (
      object.sellerBlacklist !== undefined &&
      object.sellerBlacklist !== null
    ) {
      message.sellerBlacklist = object.sellerBlacklist;
    } else {
      message.sellerBlacklist = false;
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
