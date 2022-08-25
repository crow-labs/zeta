/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../whitelist/params";
import { Member } from "../whitelist/member";
import { Buyer } from "../whitelist/buyer";
import { Seller } from "../whitelist/seller";
import { Voter } from "../whitelist/voter";

export const protobufPackage = "zeta.whitelist";

/** GenesisState defines the whitelist module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  memberList: Member[];
  buyerList: Buyer[];
  sellerList: Seller[];
  voterList: Voter[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  nextBuyerId: number;
  nextSellerId: number;
  nextVoterId: number;
}

const baseGenesisState: object = {
  nextBuyerId: 0,
  nextSellerId: 0,
  nextVoterId: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.memberList) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buyerList) {
      Buyer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sellerList) {
      Seller.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.voterList) {
      Voter.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.nextBuyerId !== 0) {
      writer.uint32(32).uint64(message.nextBuyerId);
    }
    if (message.nextSellerId !== 0) {
      writer.uint32(40).uint64(message.nextSellerId);
    }
    if (message.nextVoterId !== 0) {
      writer.uint32(48).uint64(message.nextVoterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.memberList = [];
    message.buyerList = [];
    message.sellerList = [];
    message.voterList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.memberList.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.buyerList.push(Buyer.decode(reader, reader.uint32()));
          break;
        case 7:
          message.sellerList.push(Seller.decode(reader, reader.uint32()));
          break;
        case 8:
          message.voterList.push(Voter.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextBuyerId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.nextSellerId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.nextVoterId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.memberList = [];
    message.buyerList = [];
    message.sellerList = [];
    message.voterList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.memberList !== undefined && object.memberList !== null) {
      for (const e of object.memberList) {
        message.memberList.push(Member.fromJSON(e));
      }
    }
    if (object.buyerList !== undefined && object.buyerList !== null) {
      for (const e of object.buyerList) {
        message.buyerList.push(Buyer.fromJSON(e));
      }
    }
    if (object.sellerList !== undefined && object.sellerList !== null) {
      for (const e of object.sellerList) {
        message.sellerList.push(Seller.fromJSON(e));
      }
    }
    if (object.voterList !== undefined && object.voterList !== null) {
      for (const e of object.voterList) {
        message.voterList.push(Voter.fromJSON(e));
      }
    }
    if (object.nextBuyerId !== undefined && object.nextBuyerId !== null) {
      message.nextBuyerId = Number(object.nextBuyerId);
    } else {
      message.nextBuyerId = 0;
    }
    if (object.nextSellerId !== undefined && object.nextSellerId !== null) {
      message.nextSellerId = Number(object.nextSellerId);
    } else {
      message.nextSellerId = 0;
    }
    if (object.nextVoterId !== undefined && object.nextVoterId !== null) {
      message.nextVoterId = Number(object.nextVoterId);
    } else {
      message.nextVoterId = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.memberList) {
      obj.memberList = message.memberList.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.memberList = [];
    }
    if (message.buyerList) {
      obj.buyerList = message.buyerList.map((e) =>
        e ? Buyer.toJSON(e) : undefined
      );
    } else {
      obj.buyerList = [];
    }
    if (message.sellerList) {
      obj.sellerList = message.sellerList.map((e) =>
        e ? Seller.toJSON(e) : undefined
      );
    } else {
      obj.sellerList = [];
    }
    if (message.voterList) {
      obj.voterList = message.voterList.map((e) =>
        e ? Voter.toJSON(e) : undefined
      );
    } else {
      obj.voterList = [];
    }
    message.nextBuyerId !== undefined &&
      (obj.nextBuyerId = message.nextBuyerId);
    message.nextSellerId !== undefined &&
      (obj.nextSellerId = message.nextSellerId);
    message.nextVoterId !== undefined &&
      (obj.nextVoterId = message.nextVoterId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.memberList = [];
    message.buyerList = [];
    message.sellerList = [];
    message.voterList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.memberList !== undefined && object.memberList !== null) {
      for (const e of object.memberList) {
        message.memberList.push(Member.fromPartial(e));
      }
    }
    if (object.buyerList !== undefined && object.buyerList !== null) {
      for (const e of object.buyerList) {
        message.buyerList.push(Buyer.fromPartial(e));
      }
    }
    if (object.sellerList !== undefined && object.sellerList !== null) {
      for (const e of object.sellerList) {
        message.sellerList.push(Seller.fromPartial(e));
      }
    }
    if (object.voterList !== undefined && object.voterList !== null) {
      for (const e of object.voterList) {
        message.voterList.push(Voter.fromPartial(e));
      }
    }
    if (object.nextBuyerId !== undefined && object.nextBuyerId !== null) {
      message.nextBuyerId = object.nextBuyerId;
    } else {
      message.nextBuyerId = 0;
    }
    if (object.nextSellerId !== undefined && object.nextSellerId !== null) {
      message.nextSellerId = object.nextSellerId;
    } else {
      message.nextSellerId = 0;
    }
    if (object.nextVoterId !== undefined && object.nextVoterId !== null) {
      message.nextVoterId = object.nextVoterId;
    } else {
      message.nextVoterId = 0;
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
