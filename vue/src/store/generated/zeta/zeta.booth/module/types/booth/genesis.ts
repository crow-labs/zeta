/* eslint-disable */
import { Params } from "../booth/params";
import { Vote } from "../booth/vote";
import { Poll } from "../booth/poll";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zeta.booth";

/** GenesisState defines the booth module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  voteList: Vote[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  pollList: Poll[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pollList) {
      Poll.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteList.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pollList.push(Poll.decode(reader, reader.uint32()));
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
    message.voteList = [];
    message.pollList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromJSON(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.voteList) {
      obj.voteList = message.voteList.map((e) =>
        e ? Vote.toJSON(e) : undefined
      );
    } else {
      obj.voteList = [];
    }
    if (message.pollList) {
      obj.pollList = message.pollList.map((e) =>
        e ? Poll.toJSON(e) : undefined
      );
    } else {
      obj.pollList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromPartial(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromPartial(e));
      }
    }
    return message;
  },
};

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
