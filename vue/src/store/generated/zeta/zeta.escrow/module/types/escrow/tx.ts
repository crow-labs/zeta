/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "zeta.escrow";

export interface MsgRaiseBuyerDispute {
  creator: string;
  crowId: number;
  buyerId: number;
  title: string;
  description: string;
  externalLink: string;
  votes: number[];
}

export interface MsgRaiseBuyerDisputeResponse {
  disputeId: number;
}

export interface MsgBeginEscrow {
  creator: string;
  buyOrderId: number;
  collateral: Coin | undefined;
}

export interface MsgBeginEscrowResponse {
  crowId: number;
}

const baseMsgRaiseBuyerDispute: object = {
  creator: "",
  crowId: 0,
  buyerId: 0,
  title: "",
  description: "",
  externalLink: "",
  votes: 0,
};

export const MsgRaiseBuyerDispute = {
  encode(
    message: MsgRaiseBuyerDispute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    if (message.buyerId !== 0) {
      writer.uint32(24).uint64(message.buyerId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.externalLink !== "") {
      writer.uint32(50).string(message.externalLink);
    }
    writer.uint32(58).fork();
    for (const v of message.votes) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRaiseBuyerDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRaiseBuyerDispute } as MsgRaiseBuyerDispute;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.externalLink = reader.string();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.votes.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.votes.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRaiseBuyerDispute {
    const message = { ...baseMsgRaiseBuyerDispute } as MsgRaiseBuyerDispute;
    message.votes = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = String(object.externalLink);
    } else {
      message.externalLink = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: MsgRaiseBuyerDispute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.externalLink !== undefined &&
      (obj.externalLink = message.externalLink);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRaiseBuyerDispute>): MsgRaiseBuyerDispute {
    const message = { ...baseMsgRaiseBuyerDispute } as MsgRaiseBuyerDispute;
    message.votes = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = object.externalLink;
    } else {
      message.externalLink = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(e);
      }
    }
    return message;
  },
};

const baseMsgRaiseBuyerDisputeResponse: object = { disputeId: 0 };

export const MsgRaiseBuyerDisputeResponse = {
  encode(
    message: MsgRaiseBuyerDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.disputeId !== 0) {
      writer.uint32(8).uint64(message.disputeId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRaiseBuyerDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRaiseBuyerDisputeResponse,
    } as MsgRaiseBuyerDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRaiseBuyerDisputeResponse {
    const message = {
      ...baseMsgRaiseBuyerDisputeResponse,
    } as MsgRaiseBuyerDisputeResponse;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    return message;
  },

  toJSON(message: MsgRaiseBuyerDisputeResponse): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRaiseBuyerDisputeResponse>
  ): MsgRaiseBuyerDisputeResponse {
    const message = {
      ...baseMsgRaiseBuyerDisputeResponse,
    } as MsgRaiseBuyerDisputeResponse;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    return message;
  },
};

const baseMsgBeginEscrow: object = { creator: "", buyOrderId: 0 };

export const MsgBeginEscrow = {
  encode(message: MsgBeginEscrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyOrderId !== 0) {
      writer.uint32(16).uint64(message.buyOrderId);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBeginEscrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBeginEscrow } as MsgBeginEscrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginEscrow {
    const message = { ...baseMsgBeginEscrow } as MsgBeginEscrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    return message;
  },

  toJSON(message: MsgBeginEscrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBeginEscrow>): MsgBeginEscrow {
    const message = { ...baseMsgBeginEscrow } as MsgBeginEscrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    return message;
  },
};

const baseMsgBeginEscrowResponse: object = { crowId: 0 };

export const MsgBeginEscrowResponse = {
  encode(
    message: MsgBeginEscrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== 0) {
      writer.uint32(8).uint64(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBeginEscrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBeginEscrowResponse } as MsgBeginEscrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginEscrowResponse {
    const message = { ...baseMsgBeginEscrowResponse } as MsgBeginEscrowResponse;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = Number(object.crowId);
    } else {
      message.crowId = 0;
    }
    return message;
  },

  toJSON(message: MsgBeginEscrowResponse): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBeginEscrowResponse>
  ): MsgBeginEscrowResponse {
    const message = { ...baseMsgBeginEscrowResponse } as MsgBeginEscrowResponse;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RaiseBuyerDispute(
    request: MsgRaiseBuyerDispute
  ): Promise<MsgRaiseBuyerDisputeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BeginEscrow(request: MsgBeginEscrow): Promise<MsgBeginEscrowResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RaiseBuyerDispute(
    request: MsgRaiseBuyerDispute
  ): Promise<MsgRaiseBuyerDisputeResponse> {
    const data = MsgRaiseBuyerDispute.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.escrow.Msg",
      "RaiseBuyerDispute",
      data
    );
    return promise.then((data) =>
      MsgRaiseBuyerDisputeResponse.decode(new Reader(data))
    );
  }

  BeginEscrow(request: MsgBeginEscrow): Promise<MsgBeginEscrowResponse> {
    const data = MsgBeginEscrow.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Msg", "BeginEscrow", data);
    return promise.then((data) =>
      MsgBeginEscrowResponse.decode(new Reader(data))
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
