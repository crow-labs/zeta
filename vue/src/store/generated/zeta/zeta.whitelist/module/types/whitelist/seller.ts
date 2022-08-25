/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zeta.whitelist";

export interface Seller {
  sellerId: number;
  name: string;
  contactInfo: string;
  address: string;
  status: string;
  activeItem: number[];
  activeOrder: number[];
  completedOrder: number[];
}

const baseSeller: object = {
  sellerId: 0,
  name: "",
  contactInfo: "",
  address: "",
  status: "",
  activeItem: 0,
  activeOrder: 0,
  completedOrder: 0,
};

export const Seller = {
  encode(message: Seller, writer: Writer = Writer.create()): Writer {
    if (message.sellerId !== 0) {
      writer.uint32(8).uint64(message.sellerId);
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
    for (const v of message.activeItem) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.activeOrder) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.completedOrder) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Seller {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSeller } as Seller;
    message.activeItem = [];
    message.activeOrder = [];
    message.completedOrder = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerId = longToNumber(reader.uint64() as Long);
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
              message.activeItem.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.activeItem.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeOrder.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.activeOrder.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 8:
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

  fromJSON(object: any): Seller {
    const message = { ...baseSeller } as Seller;
    message.activeItem = [];
    message.activeOrder = [];
    message.completedOrder = [];
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
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
    if (object.activeItem !== undefined && object.activeItem !== null) {
      for (const e of object.activeItem) {
        message.activeItem.push(Number(e));
      }
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

  toJSON(message: Seller): unknown {
    const obj: any = {};
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.name !== undefined && (obj.name = message.name);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = message.status);
    if (message.activeItem) {
      obj.activeItem = message.activeItem.map((e) => e);
    } else {
      obj.activeItem = [];
    }
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

  fromPartial(object: DeepPartial<Seller>): Seller {
    const message = { ...baseSeller } as Seller;
    message.activeItem = [];
    message.activeOrder = [];
    message.completedOrder = [];
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
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
    if (object.activeItem !== undefined && object.activeItem !== null) {
      for (const e of object.activeItem) {
        message.activeItem.push(e);
      }
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
