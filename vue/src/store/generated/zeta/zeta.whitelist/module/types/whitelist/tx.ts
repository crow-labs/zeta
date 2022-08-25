/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "zeta.whitelist";

export interface MsgMembershipApplication {
  creator: string;
  name: string;
}

export interface MsgMembershipApplicationResponse {
  joined: boolean;
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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MembershipApplication(
    request: MsgMembershipApplication
  ): Promise<MsgMembershipApplicationResponse>;
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
