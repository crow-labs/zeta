/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zeta.whitelist";

export interface Buyer {
  buyerId: number;
  name: string;
  contactInfo: string;
  address: string;
  status: string;
  activeOrder: number[];
  completedOrder: number[];
}

const baseBuyer: object = {
  buyerId: 0,
  name: "",
  contactInfo: "",
  address: "",
  status: "",
  activeOrder: 0,
  completedOrder: 0,
};

export const Buyer = {
  encode(message: Buyer, writer: Writer = Writer.create()): Writer {
    if (message.buyerId !== 0) {
      writer.uint32(8).uint64(message.buyerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.contactInfo !== "") {
      writer.uint32(26).string(message.contactInfo);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    writer.uint32(50).fork();
    for (const v of message.activeOrder) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.completedOrder) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Buyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyer } as Buyer;
    message.activeOrder = [];
    message.completedOrder = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.contactInfo = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeOrder.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.activeOrder.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.completedOrder.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.completedOrder.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Buyer {
    const message = { ...baseBuyer } as Buyer;
    message.activeOrder = [];
    message.completedOrder = [];
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = String(object.contactInfo);
    } else {
      message.contactInfo = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.activeOrder !== undefined && object.activeOrder !== null) {
      for (const e of object.activeOrder) {
        message.activeOrder.push(Number(e));
      }
    }
    if (object.completedOrder !== undefined && object.completedOrder !== null) {
      for (const e of object.completedOrder) {
        message.completedOrder.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: Buyer): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.name !== undefined && (obj.name = message.name);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = message.status);
    if (message.activeOrder) {
      obj.activeOrder = message.activeOrder.map((e) => e);
    } else {
      obj.activeOrder = [];
    }
    if (message.completedOrder) {
      obj.completedOrder = message.completedOrder.map((e) => e);
    } else {
      obj.completedOrder = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Buyer>): Buyer {
    const message = { ...baseBuyer } as Buyer;
    message.activeOrder = [];
    message.completedOrder = [];
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = object.contactInfo;
    } else {
      message.contactInfo = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.activeOrder !== undefined && object.activeOrder !== null) {
      for (const e of object.activeOrder) {
        message.activeOrder.push(e);
      }
    }
    if (object.completedOrder !== undefined && object.completedOrder !== null) {
      for (const e of object.completedOrder) {
        message.completedOrder.push(e);
      }
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
