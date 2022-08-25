/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "zeta.market";

export interface MsgPrepareItem {
  creator: string;
  title: string;
  desciption: string;
  externalLink: string;
  sellerId: number;
}

export interface MsgPrepareItemResponse {
  itemId: number;
}

export interface MsgRemoveItem {
  creator: string;
  itemId: number;
  sellerId: number;
}

export interface MsgRemoveItemResponse {}

const baseMsgPrepareItem: object = {
  creator: "",
  title: "",
  desciption: "",
  externalLink: "",
  sellerId: 0,
};

export const MsgPrepareItem = {
  encode(message: MsgPrepareItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.desciption !== "") {
      writer.uint32(26).string(message.desciption);
    }
    if (message.externalLink !== "") {
      writer.uint32(34).string(message.externalLink);
    }
    if (message.sellerId !== 0) {
      writer.uint32(40).uint64(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPrepareItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPrepareItem } as MsgPrepareItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.desciption = reader.string();
          break;
        case 4:
          message.externalLink = reader.string();
          break;
        case 5:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrepareItem {
    const message = { ...baseMsgPrepareItem } as MsgPrepareItem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desciption !== undefined && object.desciption !== null) {
      message.desciption = String(object.desciption);
    } else {
      message.desciption = "";
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = String(object.externalLink);
    } else {
      message.externalLink = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    return message;
  },

  toJSON(message: MsgPrepareItem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.desciption !== undefined && (obj.desciption = message.desciption);
    message.externalLink !== undefined &&
      (obj.externalLink = message.externalLink);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPrepareItem>): MsgPrepareItem {
    const message = { ...baseMsgPrepareItem } as MsgPrepareItem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desciption !== undefined && object.desciption !== null) {
      message.desciption = object.desciption;
    } else {
      message.desciption = "";
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = object.externalLink;
    } else {
      message.externalLink = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    return message;
  },
};

const baseMsgPrepareItemResponse: object = { itemId: 0 };

export const MsgPrepareItemResponse = {
  encode(
    message: MsgPrepareItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPrepareItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPrepareItemResponse } as MsgPrepareItemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrepareItemResponse {
    const message = { ...baseMsgPrepareItemResponse } as MsgPrepareItemResponse;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    return message;
  },

  toJSON(message: MsgPrepareItemResponse): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPrepareItemResponse>
  ): MsgPrepareItemResponse {
    const message = { ...baseMsgPrepareItemResponse } as MsgPrepareItemResponse;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    return message;
  },
};

const baseMsgRemoveItem: object = { creator: "", itemId: 0, sellerId: 0 };

export const MsgRemoveItem = {
  encode(message: MsgRemoveItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(24).uint64(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveItem } as MsgRemoveItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveItem {
    const message = { ...baseMsgRemoveItem } as MsgRemoveItem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgRemoveItem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveItem>): MsgRemoveItem {
    const message = { ...baseMsgRemoveItem } as MsgRemoveItem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgRemoveItemResponse: object = {};

export const MsgRemoveItemResponse = {
  encode(_: MsgRemoveItemResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveItemResponse } as MsgRemoveItemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveItemResponse {
    const message = { ...baseMsgRemoveItemResponse } as MsgRemoveItemResponse;
    return message;
  },

  toJSON(_: MsgRemoveItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveItemResponse>): MsgRemoveItemResponse {
    const message = { ...baseMsgRemoveItemResponse } as MsgRemoveItemResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PrepareItem(request: MsgPrepareItem): Promise<MsgPrepareItemResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RemoveItem(request: MsgRemoveItem): Promise<MsgRemoveItemResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  PrepareItem(request: MsgPrepareItem): Promise<MsgPrepareItemResponse> {
    const data = MsgPrepareItem.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Msg", "PrepareItem", data);
    return promise.then((data) =>
      MsgPrepareItemResponse.decode(new Reader(data))
    );
  }

  RemoveItem(request: MsgRemoveItem): Promise<MsgRemoveItemResponse> {
    const data = MsgRemoveItem.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Msg", "RemoveItem", data);
    return promise.then((data) =>
      MsgRemoveItemResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
