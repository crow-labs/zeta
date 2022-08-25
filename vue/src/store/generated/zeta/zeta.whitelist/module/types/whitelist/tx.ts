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

export interface MsgSellerApplication {
  creator: string;
  contactInfo: string;
  name: string;
}

export interface MsgSellerApplicationResponse {
  sellerId: number;
}

export interface MsgVoterApplication {
  creator: string;
  alias: string;
}

export interface MsgVoterApplicationResponse {
  voterId: number;
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

const baseMsgSellerApplication: object = {
  creator: "",
  contactInfo: "",
  name: "",
};

export const MsgSellerApplication = {
  encode(
    message: MsgSellerApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contactInfo !== "") {
      writer.uint32(18).string(message.contactInfo);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellerApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellerApplication } as MsgSellerApplication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contactInfo = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellerApplication {
    const message = { ...baseMsgSellerApplication } as MsgSellerApplication;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgSellerApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellerApplication>): MsgSellerApplication {
    const message = { ...baseMsgSellerApplication } as MsgSellerApplication;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgSellerApplicationResponse: object = { sellerId: 0 };

export const MsgSellerApplicationResponse = {
  encode(
    message: MsgSellerApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerId !== 0) {
      writer.uint32(8).uint64(message.sellerId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSellerApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSellerApplicationResponse,
    } as MsgSellerApplicationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellerApplicationResponse {
    const message = {
      ...baseMsgSellerApplicationResponse,
    } as MsgSellerApplicationResponse;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    return message;
  },

  toJSON(message: MsgSellerApplicationResponse): unknown {
    const obj: any = {};
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSellerApplicationResponse>
  ): MsgSellerApplicationResponse {
    const message = {
      ...baseMsgSellerApplicationResponse,
    } as MsgSellerApplicationResponse;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    return message;
  },
};

const baseMsgVoterApplication: object = { creator: "", alias: "" };

export const MsgVoterApplication = {
  encode(
    message: MsgVoterApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVoterApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoterApplication } as MsgVoterApplication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoterApplication {
    const message = { ...baseMsgVoterApplication } as MsgVoterApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = String(object.alias);
    } else {
      message.alias = "";
    }
    return message;
  },

  toJSON(message: MsgVoterApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVoterApplication>): MsgVoterApplication {
    const message = { ...baseMsgVoterApplication } as MsgVoterApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    } else {
      message.alias = "";
    }
    return message;
  },
};

const baseMsgVoterApplicationResponse: object = { voterId: 0 };

export const MsgVoterApplicationResponse = {
  encode(
    message: MsgVoterApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voterId !== 0) {
      writer.uint32(8).uint64(message.voterId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgVoterApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgVoterApplicationResponse,
    } as MsgVoterApplicationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoterApplicationResponse {
    const message = {
      ...baseMsgVoterApplicationResponse,
    } as MsgVoterApplicationResponse;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = Number(object.voterId);
    } else {
      message.voterId = 0;
    }
    return message;
  },

  toJSON(message: MsgVoterApplicationResponse): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgVoterApplicationResponse>
  ): MsgVoterApplicationResponse {
    const message = {
      ...baseMsgVoterApplicationResponse,
    } as MsgVoterApplicationResponse;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  MembershipApplication(
    request: MsgMembershipApplication
  ): Promise<MsgMembershipApplicationResponse>;
  BuyerApplication(
    request: MsgBuyerApplication
  ): Promise<MsgBuyerApplicationResponse>;
  SellerApplication(
    request: MsgSellerApplication
  ): Promise<MsgSellerApplicationResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  VoterApplication(
    request: MsgVoterApplication
  ): Promise<MsgVoterApplicationResponse>;
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

  SellerApplication(
    request: MsgSellerApplication
  ): Promise<MsgSellerApplicationResponse> {
    const data = MsgSellerApplication.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.whitelist.Msg",
      "SellerApplication",
      data
    );
    return promise.then((data) =>
      MsgSellerApplicationResponse.decode(new Reader(data))
    );
  }

  VoterApplication(
    request: MsgVoterApplication
  ): Promise<MsgVoterApplicationResponse> {
    const data = MsgVoterApplication.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.whitelist.Msg",
      "VoterApplication",
      data
    );
    return promise.then((data) =>
      MsgVoterApplicationResponse.decode(new Reader(data))
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
