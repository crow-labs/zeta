/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "zeta.market";

export interface SellOrder {
  sellOrderId: number;
  itemId: number;
  sellerId: number;
  crowId: number;
  price: Coin | undefined;
  collateral: Coin | undefined;
  status: string;
}

const baseSellOrder: object = {
  sellOrderId: 0,
  itemId: 0,
  sellerId: 0,
  crowId: 0,
  status: "",
};

export const SellOrder = {
  encode(message: SellOrder, writer: Writer = Writer.create()): Writer {
    if (message.sellOrderId !== 0) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(24).uint64(message.sellerId);
    }
    if (message.crowId !== 0) {
      writer.uint32(32).uint64(message.crowId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(50).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SellOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSellOrder } as SellOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellOrder {
    const message = { ...baseSellOrder } as SellOrder;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = Number(object.sellOrderId);
    } else {
      message.sellOrderId = 0;
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: SellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<SellOrder>): SellOrder {
    const message = { ...baseSellOrder } as SellOrder;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = 0;
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
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
