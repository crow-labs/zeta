/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "zeta.escrow";

export interface MsgBeginEscrow {
  creator: string;
  buyOrderId: number;
}

export interface MsgBeginEscrowResponse {
  crowId: number;
}

export interface MsgJoinEscrow {
  creator: string;
  crowId: number;
}

export interface MsgJoinEscrowResponse {}

export interface MsgCompleteEscrowNoDispute {
  creator: string;
  crowId: number;
}

export interface MsgCompleteEscrowNoDisputeResponse {}

export interface MsgRaiseBuyerDispute {
  creator: string;
  crowId: number;
  title: string;
  description: string;
  evidence: string[];
}

export interface MsgRaiseBuyerDisputeResponse {
  disputeId: number;
}

export interface MsgAddSellerEvidence {
  creator: string;
  crowId: number;
  disputeId: number;
  description: string;
  evidence: string;
}

export interface MsgAddSellerEvidenceResponse {}

export interface MsgAddBuyerEvidence {
  creator: string;
  crowId: number;
  disputeId: number;
  description: string;
  evidence: string;
}

export interface MsgAddBuyerEvidenceResponse {}

const baseMsgBeginEscrow: object = { creator: "", buyOrderId: 0 };

export const MsgBeginEscrow = {
  encode(message: MsgBeginEscrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyOrderId !== 0) {
      writer.uint32(16).uint64(message.buyOrderId);
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
    return message;
  },

  toJSON(message: MsgBeginEscrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
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

const baseMsgJoinEscrow: object = { creator: "", crowId: 0 };

export const MsgJoinEscrow = {
  encode(message: MsgJoinEscrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinEscrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinEscrow } as MsgJoinEscrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinEscrow {
    const message = { ...baseMsgJoinEscrow } as MsgJoinEscrow;
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
    return message;
  },

  toJSON(message: MsgJoinEscrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgJoinEscrow>): MsgJoinEscrow {
    const message = { ...baseMsgJoinEscrow } as MsgJoinEscrow;
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
    return message;
  },
};

const baseMsgJoinEscrowResponse: object = {};

export const MsgJoinEscrowResponse = {
  encode(_: MsgJoinEscrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinEscrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinEscrowResponse } as MsgJoinEscrowResponse;
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

  fromJSON(_: any): MsgJoinEscrowResponse {
    const message = { ...baseMsgJoinEscrowResponse } as MsgJoinEscrowResponse;
    return message;
  },

  toJSON(_: MsgJoinEscrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgJoinEscrowResponse>): MsgJoinEscrowResponse {
    const message = { ...baseMsgJoinEscrowResponse } as MsgJoinEscrowResponse;
    return message;
  },
};

const baseMsgCompleteEscrowNoDispute: object = { creator: "", crowId: 0 };

export const MsgCompleteEscrowNoDispute = {
  encode(
    message: MsgCompleteEscrowNoDispute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompleteEscrowNoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteEscrowNoDispute,
    } as MsgCompleteEscrowNoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCompleteEscrowNoDispute {
    const message = {
      ...baseMsgCompleteEscrowNoDispute,
    } as MsgCompleteEscrowNoDispute;
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
    return message;
  },

  toJSON(message: MsgCompleteEscrowNoDispute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCompleteEscrowNoDispute>
  ): MsgCompleteEscrowNoDispute {
    const message = {
      ...baseMsgCompleteEscrowNoDispute,
    } as MsgCompleteEscrowNoDispute;
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
    return message;
  },
};

const baseMsgCompleteEscrowNoDisputeResponse: object = {};

export const MsgCompleteEscrowNoDisputeResponse = {
  encode(
    _: MsgCompleteEscrowNoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompleteEscrowNoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteEscrowNoDisputeResponse,
    } as MsgCompleteEscrowNoDisputeResponse;
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

  fromJSON(_: any): MsgCompleteEscrowNoDisputeResponse {
    const message = {
      ...baseMsgCompleteEscrowNoDisputeResponse,
    } as MsgCompleteEscrowNoDisputeResponse;
    return message;
  },

  toJSON(_: MsgCompleteEscrowNoDisputeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCompleteEscrowNoDisputeResponse>
  ): MsgCompleteEscrowNoDisputeResponse {
    const message = {
      ...baseMsgCompleteEscrowNoDisputeResponse,
    } as MsgCompleteEscrowNoDisputeResponse;
    return message;
  },
};

const baseMsgRaiseBuyerDispute: object = {
  creator: "",
  crowId: 0,
  title: "",
  description: "",
  evidence: "",
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
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.evidence) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRaiseBuyerDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRaiseBuyerDispute } as MsgRaiseBuyerDispute;
    message.evidence = [];
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
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.evidence.push(reader.string());
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
    message.evidence = [];
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
    if (object.evidence !== undefined && object.evidence !== null) {
      for (const e of object.evidence) {
        message.evidence.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgRaiseBuyerDispute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => e);
    } else {
      obj.evidence = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRaiseBuyerDispute>): MsgRaiseBuyerDispute {
    const message = { ...baseMsgRaiseBuyerDispute } as MsgRaiseBuyerDispute;
    message.evidence = [];
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
    if (object.evidence !== undefined && object.evidence !== null) {
      for (const e of object.evidence) {
        message.evidence.push(e);
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

const baseMsgAddSellerEvidence: object = {
  creator: "",
  crowId: 0,
  disputeId: 0,
  description: "",
  evidence: "",
};

export const MsgAddSellerEvidence = {
  encode(
    message: MsgAddSellerEvidence,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    if (message.disputeId !== 0) {
      writer.uint32(24).uint64(message.disputeId);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.evidence !== "") {
      writer.uint32(42).string(message.evidence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddSellerEvidence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddSellerEvidence } as MsgAddSellerEvidence;
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
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddSellerEvidence {
    const message = { ...baseMsgAddSellerEvidence } as MsgAddSellerEvidence;
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
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    return message;
  },

  toJSON(message: MsgAddSellerEvidence): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddSellerEvidence>): MsgAddSellerEvidence {
    const message = { ...baseMsgAddSellerEvidence } as MsgAddSellerEvidence;
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
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    return message;
  },
};

const baseMsgAddSellerEvidenceResponse: object = {};

export const MsgAddSellerEvidenceResponse = {
  encode(
    _: MsgAddSellerEvidenceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddSellerEvidenceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddSellerEvidenceResponse,
    } as MsgAddSellerEvidenceResponse;
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

  fromJSON(_: any): MsgAddSellerEvidenceResponse {
    const message = {
      ...baseMsgAddSellerEvidenceResponse,
    } as MsgAddSellerEvidenceResponse;
    return message;
  },

  toJSON(_: MsgAddSellerEvidenceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddSellerEvidenceResponse>
  ): MsgAddSellerEvidenceResponse {
    const message = {
      ...baseMsgAddSellerEvidenceResponse,
    } as MsgAddSellerEvidenceResponse;
    return message;
  },
};

const baseMsgAddBuyerEvidence: object = {
  creator: "",
  crowId: 0,
  disputeId: 0,
  description: "",
  evidence: "",
};

export const MsgAddBuyerEvidence = {
  encode(
    message: MsgAddBuyerEvidence,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    if (message.disputeId !== 0) {
      writer.uint32(24).uint64(message.disputeId);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.evidence !== "") {
      writer.uint32(42).string(message.evidence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddBuyerEvidence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddBuyerEvidence } as MsgAddBuyerEvidence;
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
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddBuyerEvidence {
    const message = { ...baseMsgAddBuyerEvidence } as MsgAddBuyerEvidence;
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
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    return message;
  },

  toJSON(message: MsgAddBuyerEvidence): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddBuyerEvidence>): MsgAddBuyerEvidence {
    const message = { ...baseMsgAddBuyerEvidence } as MsgAddBuyerEvidence;
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
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    return message;
  },
};

const baseMsgAddBuyerEvidenceResponse: object = {};

export const MsgAddBuyerEvidenceResponse = {
  encode(
    _: MsgAddBuyerEvidenceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddBuyerEvidenceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddBuyerEvidenceResponse,
    } as MsgAddBuyerEvidenceResponse;
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

  fromJSON(_: any): MsgAddBuyerEvidenceResponse {
    const message = {
      ...baseMsgAddBuyerEvidenceResponse,
    } as MsgAddBuyerEvidenceResponse;
    return message;
  },

  toJSON(_: MsgAddBuyerEvidenceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddBuyerEvidenceResponse>
  ): MsgAddBuyerEvidenceResponse {
    const message = {
      ...baseMsgAddBuyerEvidenceResponse,
    } as MsgAddBuyerEvidenceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BeginEscrow(request: MsgBeginEscrow): Promise<MsgBeginEscrowResponse>;
  JoinEscrow(request: MsgJoinEscrow): Promise<MsgJoinEscrowResponse>;
  CompleteEscrowNoDispute(
    request: MsgCompleteEscrowNoDispute
  ): Promise<MsgCompleteEscrowNoDisputeResponse>;
  RaiseBuyerDispute(
    request: MsgRaiseBuyerDispute
  ): Promise<MsgRaiseBuyerDisputeResponse>;
  AddSellerEvidence(
    request: MsgAddSellerEvidence
  ): Promise<MsgAddSellerEvidenceResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddBuyerEvidence(
    request: MsgAddBuyerEvidence
  ): Promise<MsgAddBuyerEvidenceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BeginEscrow(request: MsgBeginEscrow): Promise<MsgBeginEscrowResponse> {
    const data = MsgBeginEscrow.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Msg", "BeginEscrow", data);
    return promise.then((data) =>
      MsgBeginEscrowResponse.decode(new Reader(data))
    );
  }

  JoinEscrow(request: MsgJoinEscrow): Promise<MsgJoinEscrowResponse> {
    const data = MsgJoinEscrow.encode(request).finish();
    const promise = this.rpc.request("zeta.escrow.Msg", "JoinEscrow", data);
    return promise.then((data) =>
      MsgJoinEscrowResponse.decode(new Reader(data))
    );
  }

  CompleteEscrowNoDispute(
    request: MsgCompleteEscrowNoDispute
  ): Promise<MsgCompleteEscrowNoDisputeResponse> {
    const data = MsgCompleteEscrowNoDispute.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.escrow.Msg",
      "CompleteEscrowNoDispute",
      data
    );
    return promise.then((data) =>
      MsgCompleteEscrowNoDisputeResponse.decode(new Reader(data))
    );
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

  AddSellerEvidence(
    request: MsgAddSellerEvidence
  ): Promise<MsgAddSellerEvidenceResponse> {
    const data = MsgAddSellerEvidence.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.escrow.Msg",
      "AddSellerEvidence",
      data
    );
    return promise.then((data) =>
      MsgAddSellerEvidenceResponse.decode(new Reader(data))
    );
  }

  AddBuyerEvidence(
    request: MsgAddBuyerEvidence
  ): Promise<MsgAddBuyerEvidenceResponse> {
    const data = MsgAddBuyerEvidence.encode(request).finish();
    const promise = this.rpc.request(
      "zeta.escrow.Msg",
      "AddBuyerEvidence",
      data
    );
    return promise.then((data) =>
      MsgAddBuyerEvidenceResponse.decode(new Reader(data))
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
