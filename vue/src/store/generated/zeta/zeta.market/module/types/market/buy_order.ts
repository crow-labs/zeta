/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "zeta.market";

export interface BuyOrder {
  buyOrderId: number;
  sellOrderId: number;
  buyerId: number;
  crowId: number;
  price: Coin | undefined;
  collateral: Coin | undefined;
}

const baseBuyOrder: object = {
  buyOrderId: 0,
  sellOrderId: 0,
  buyerId: 0,
  crowId: 0,
};

export const BuyOrder = {
  encode(message: BuyOrder, writer: Writer = Writer.create()): Writer {
    if (message.buyOrderId !== 0) {
      writer.uint32(8).uint64(message.buyOrderId);
    }
    if (message.sellOrderId !== 0) {
      writer.uint32(16).uint64(message.sellOrderId);
    }
    if (message.buyerId !== 0) {
      writer.uint32(24).uint64(message.buyerId);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyOrder } as BuyOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sellOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.buyerId = longToNumber(reader.uint64() as Long);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyOrder {
    const message = { ...baseBuyOrder } as BuyOrder;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = Number(object.sellOrderId);
    } else {
      message.sellOrderId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
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
    return message;
  },

  toJSON(message: BuyOrder): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BuyOrder>): BuyOrder {
    const message = { ...baseBuyOrder } as BuyOrder;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
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
