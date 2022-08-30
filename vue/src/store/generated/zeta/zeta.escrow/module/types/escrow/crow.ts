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
  sellerCollateral: Coin | undefined;
  buyerPayment: Coin | undefined;
  buyerCollateral: Coin | undefined;
  status: string;
  escrowAddr: string;
}

const baseCrow: object = {
  crowId: 0,
  buyOrderId: 0,
  disputeId: 0,
  verdictId: 0,
  status: "",
  escrowAddr: "",
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
    if (message.sellerCollateral !== undefined) {
      Coin.encode(message.sellerCollateral, writer.uint32(42).fork()).ldelim();
    }
    if (message.buyerPayment !== undefined) {
      Coin.encode(message.buyerPayment, writer.uint32(50).fork()).ldelim();
    }
    if (message.buyerCollateral !== undefined) {
      Coin.encode(message.buyerCollateral, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    if (message.escrowAddr !== "") {
      writer.uint32(74).string(message.escrowAddr);
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
          message.sellerCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.buyerPayment = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.buyerCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.status = reader.string();
          break;
        case 9:
          message.escrowAddr = reader.string();
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
    if (
      object.sellerCollateral !== undefined &&
      object.sellerCollateral !== null
    ) {
      message.sellerCollateral = Coin.fromJSON(object.sellerCollateral);
    } else {
      message.sellerCollateral = undefined;
    }
    if (object.buyerPayment !== undefined && object.buyerPayment !== null) {
      message.buyerPayment = Coin.fromJSON(object.buyerPayment);
    } else {
      message.buyerPayment = undefined;
    }
    if (
      object.buyerCollateral !== undefined &&
      object.buyerCollateral !== null
    ) {
      message.buyerCollateral = Coin.fromJSON(object.buyerCollateral);
    } else {
      message.buyerCollateral = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.escrowAddr !== undefined && object.escrowAddr !== null) {
      message.escrowAddr = String(object.escrowAddr);
    } else {
      message.escrowAddr = "";
    }
    return message;
  },

  toJSON(message: Crow): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    message.sellerCollateral !== undefined &&
      (obj.sellerCollateral = message.sellerCollateral
        ? Coin.toJSON(message.sellerCollateral)
        : undefined);
    message.buyerPayment !== undefined &&
      (obj.buyerPayment = message.buyerPayment
        ? Coin.toJSON(message.buyerPayment)
        : undefined);
    message.buyerCollateral !== undefined &&
      (obj.buyerCollateral = message.buyerCollateral
        ? Coin.toJSON(message.buyerCollateral)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.escrowAddr !== undefined && (obj.escrowAddr = message.escrowAddr);
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
    if (
      object.sellerCollateral !== undefined &&
      object.sellerCollateral !== null
    ) {
      message.sellerCollateral = Coin.fromPartial(object.sellerCollateral);
    } else {
      message.sellerCollateral = undefined;
    }
    if (object.buyerPayment !== undefined && object.buyerPayment !== null) {
      message.buyerPayment = Coin.fromPartial(object.buyerPayment);
    } else {
      message.buyerPayment = undefined;
    }
    if (
      object.buyerCollateral !== undefined &&
      object.buyerCollateral !== null
    ) {
      message.buyerCollateral = Coin.fromPartial(object.buyerCollateral);
    } else {
      message.buyerCollateral = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.escrowAddr !== undefined && object.escrowAddr !== null) {
      message.escrowAddr = object.escrowAddr;
    } else {
      message.escrowAddr = "";
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
