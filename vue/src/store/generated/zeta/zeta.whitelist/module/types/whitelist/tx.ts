/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "zeta.whitelist";

export interface MsgMembershipApplication {
  creator: string;
  name: string;
}

export interface MsgMembershipApplicationResponse {
  joined: boolean;
}

export interface MsgBuyerApplication {
  creator: string;
  contactInfo: string;
}

export interface MsgBuyerApplicationResponse {
  buyerId: number;
}

const baseMsgMembershipApplication: object = { creator: "", name: "" };

export const MsgMembershipApplication = {
  encode(
    message: MsgMembershipApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMembershipApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMembershipApplication,
    } as MsgMembershipApplication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMembershipApplication {
    const message = {
      ...baseMsgMembershipApplication,
    } as MsgMembershipApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgMembershipApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMembershipApplication>
  ): MsgMembershipApplication {
    const message = {
      ...baseMsgMembershipApplication,
    } as MsgMembershipApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgMembershipApplicationResponse: object = { joined: false };

export const MsgMembershipApplicationResponse = {
  encode(
    message: MsgMembershipApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.joined === true) {
      writer.uint32(8).bool(message.joined);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMembershipApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMembershipApplicationResponse,
    } as MsgMembershipApplicationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.joined = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMembershipApplicationResponse {
    const message = {
      ...baseMsgMembershipApplicationResponse,
    } as MsgMembershipApplicationResponse;
    if (object.joined !== undefined && object.joined !== null) {
      message.joined = Boolean(object.joined);
    } else {
      message.joined = false;
    }
    return message;
  },

  toJSON(message: MsgMembershipApplicationResponse): unknown {
    const obj: any = {};
    message.joined !== undefined && (obj.joined = message.joined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMembershipApplicationResponse>
  ): MsgMembershipApplicationResponse {
    const message = {
      ...baseMsgMembershipApplicationResponse,
    } as MsgMembershipApplicationResponse;
    if (object.joined !== undefined && object.joined !== null) {
      message.joined = object.joined;
    } else {
      message.joined = false;
    }
    return message;
  },
};

const baseMsgBuyerApplication: object = { creator: "", contactInfo: "" };

export const MsgBuyerApplication = {
  encode(
    message: MsgBuyerApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contactInfo !== "") {
      writer.uint32(18).string(message.contactInfo);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyerApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyerApplication } as MsgBuyerApplication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contactInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyerApplication {
    const message = { ...baseMsgBuyerApplication } as MsgBuyerApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = String(object.contactInfo);
    } else {
      message.contactInfo = "";
    }
    return message;
  },

  toJSON(message: MsgBuyerApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyerApplication>): MsgBuyerApplication {
    const message = { ...baseMsgBuyerApplication } as MsgBuyerApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = object.contactInfo;
    } else {
      message.contactInfo = "";
    }
    return message;
  },
};

const baseMsgBuyerApplicationResponse: object = { buyerId: 0 };

export const MsgBuyerApplicationResponse = {
  encode(
    message: MsgBuyerApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerId !== 0) {
      writer.uint32(8).uint64(message.buyerId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgBuyerApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgBuyerApplicationResponse,
    } as MsgBuyerApplicationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyerApplicationResponse {
    const message = {
      ...baseMsgBuyerApplicationResponse,
    } as MsgBuyerApplicationResponse;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    return message;
  },

  toJSON(message: MsgBuyerApplicationResponse): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBuyerApplicationResponse>
  ): MsgBuyerApplicationResponse {
    const message = {
      ...baseMsgBuyerApplicationResponse,
    } as MsgBuyerApplicationResponse;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  MembershipApplication(
    request: MsgMembershipApplication
  ): Promise<MsgMembershipApplicationResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyerApplication(
    request: MsgBuyerApplication
  ): Promise<MsgBuyerApplicationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MembershipApplication(
    request: MsgMembershipApplication
  ): Promise<MsgMembershipApplicationResponse> {
    const data = MsgMembershipApplication.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.whitelist.Msg",
      "MembershipApplication",
      data
    );
    return promise.then((data) =>
      MsgMembershipApplicationResponse.decode(new Reader(data))
    );
  }

  BuyerApplication(
    request: MsgBuyerApplication
  ): Promise<MsgBuyerApplicationResponse> {
    const data = MsgBuyerApplication.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.whitelist.Msg",
      "BuyerApplication",
      data
    );
    return promise.then((data) =>
      MsgBuyerApplicationResponse.decode(new Reader(data))
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
