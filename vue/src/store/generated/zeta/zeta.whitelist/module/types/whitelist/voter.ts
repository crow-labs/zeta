/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zeta.whitelist";

export interface Voter {
  voterId: number;
  alias: string;
  address: string;
  activeVote: number[];
  completedVote: number[];
}

const baseVoter: object = {
  voterId: 0,
  alias: "",
  address: "",
  activeVote: 0,
  completedVote: 0,
};

export const Voter = {
  encode(message: Voter, writer: Writer = Writer.create()): Writer {
    if (message.voterId !== 0) {
      writer.uint32(8).uint64(message.voterId);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    writer.uint32(34).fork();
    for (const v of message.activeVote) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.completedVote) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Voter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoter } as Voter;
    message.activeVote = [];
    message.completedVote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.alias = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeVote.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.activeVote.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.completedVote.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.completedVote.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Voter {
    const message = { ...baseVoter } as Voter;
    message.activeVote = [];
    message.completedVote = [];
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = Number(object.voterId);
    } else {
      message.voterId = 0;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = String(object.alias);
    } else {
      message.alias = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.activeVote !== undefined && object.activeVote !== null) {
      for (const e of object.activeVote) {
        message.activeVote.push(Number(e));
      }
    }
    if (object.completedVote !== undefined && object.completedVote !== null) {
      for (const e of object.completedVote) {
        message.completedVote.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: Voter): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.alias !== undefined && (obj.alias = message.alias);
    message.address !== undefined && (obj.address = message.address);
    if (message.activeVote) {
      obj.activeVote = message.activeVote.map((e) => e);
    } else {
      obj.activeVote = [];
    }
    if (message.completedVote) {
      obj.completedVote = message.completedVote.map((e) => e);
    } else {
      obj.completedVote = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Voter>): Voter {
    const message = { ...baseVoter } as Voter;
    message.activeVote = [];
    message.completedVote = [];
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = 0;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    } else {
      message.alias = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.activeVote !== undefined && object.activeVote !== null) {
      for (const e of object.activeVote) {
        message.activeVote.push(e);
      }
    }
    if (object.completedVote !== undefined && object.completedVote !== null) {
      for (const e of object.completedVote) {
        message.completedVote.push(e);
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
