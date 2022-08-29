/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "zeta.escrow";

export interface Crow {
  crowId: number;
  buyOrderId: number;
  disputeId: number;
  verdictId: number;
  amount: Coin | undefined;
  sellerCol: Coin | undefined;
  buyerCol: Coin | undefined;
  status: string;
}

const baseCrow: object = {
  crowId: 0,
  buyOrderId: 0,
  disputeId: 0,
  verdictId: 0,
  status: "",
};

export const Crow = {
  encode(message: Crow, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== 0) {
      writer.uint32(8).uint64(message.crowId);
    }
    if (message.buyOrderId !== 0) {
      writer.uint32(16).uint64(message.buyOrderId);
    }
    if (message.disputeId !== 0) {
      writer.uint32(24).uint64(message.disputeId);
    }
    if (message.verdictId !== 0) {
      writer.uint32(32).uint64(message.verdictId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    if (message.sellerCol !== undefined) {
      Coin.encode(message.sellerCol, writer.uint32(50).fork()).ldelim();
    }
    if (message.buyerCol !== undefined) {
      Coin.encode(message.buyerCol, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Crow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCrow } as Crow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.verdictId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.sellerCol = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.buyerCol = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Crow {
    const message = { ...baseCrow } as Crow;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = Number(object.verdictId);
    } else {
      message.verdictId = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.sellerCol !== undefined && object.sellerCol !== null) {
      message.sellerCol = Coin.fromJSON(object.sellerCol);
    } else {
      message.sellerCol = undefined;
    }
    if (object.buyerCol !== undefined && object.buyerCol !== null) {
      message.buyerCol = Coin.fromJSON(object.buyerCol);
    } else {
      message.buyerCol = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: Crow): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.sellerCol !== undefined &&
      (obj.sellerCol = message.sellerCol
        ? Coin.toJSON(message.sellerCol)
        : undefined);
    message.buyerCol !== undefined &&
      (obj.buyerCol = message.buyerCol
        ? Coin.toJSON(message.buyerCol)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<Crow>): Crow {
    const message = { ...baseCrow } as Crow;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = object.verdictId;
    } else {
      message.verdictId = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.sellerCol !== undefined && object.sellerCol !== null) {
      message.sellerCol = Coin.fromPartial(object.sellerCol);
    } else {
      message.sellerCol = undefined;
    }
    if (object.buyerCol !== undefined && object.buyerCol !== null) {
      message.buyerCol = Coin.fromPartial(object.buyerCol);
    } else {
      message.buyerCol = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
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
