/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

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

export interface MsgListItem {
  creator: string;
  itemId: number;
  sellerId: number;
  price: Coin | undefined;
  collateral: Coin | undefined;
}

export interface MsgListItemResponse {
  sellOrderId: number;
}

export interface MsgPlaceBuyOrder {
  creator: string;
  sellOrderId: number;
  buyerId: number;
  price: Coin | undefined;
  collateral: Coin | undefined;
}

export interface MsgPlaceBuyOrderResponse {
  buyOrderId: number;
}

export interface MsgAcceptBuyOrder {
  creator: string;
  buyOrderId: number;
  sellerId: number;
}

export interface MsgAcceptBuyOrderResponse {}

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

const baseMsgListItem: object = { creator: "", itemId: 0, sellerId: 0 };

export const MsgListItem = {
  encode(message: MsgListItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(24).uint64(message.sellerId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgListItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgListItem } as MsgListItem;
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
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgListItem {
    const message = { ...baseMsgListItem } as MsgListItem;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    return message;
  },

  toJSON(message: MsgListItem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgListItem>): MsgListItem {
    const message = { ...baseMsgListItem } as MsgListItem;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    return message;
  },
};

const baseMsgListItemResponse: object = { sellOrderId: 0 };

export const MsgListItemResponse = {
  encode(
    message: MsgListItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellOrderId !== 0) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgListItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgListItemResponse } as MsgListItemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgListItemResponse {
    const message = { ...baseMsgListItemResponse } as MsgListItemResponse;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = Number(object.sellOrderId);
    } else {
      message.sellOrderId = 0;
    }
    return message;
  },

  toJSON(message: MsgListItemResponse): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgListItemResponse>): MsgListItemResponse {
    const message = { ...baseMsgListItemResponse } as MsgListItemResponse;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = 0;
    }
    return message;
  },
};

const baseMsgPlaceBuyOrder: object = {
  creator: "",
  sellOrderId: 0,
  buyerId: 0,
};

export const MsgPlaceBuyOrder = {
  encode(message: MsgPlaceBuyOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sellOrderId !== 0) {
      writer.uint32(16).uint64(message.sellOrderId);
    }
    if (message.buyerId !== 0) {
      writer.uint32(24).uint64(message.buyerId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPlaceBuyOrder } as MsgPlaceBuyOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sellOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgPlaceBuyOrder {
    const message = { ...baseMsgPlaceBuyOrder } as MsgPlaceBuyOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = Number(object.sellOrderId);
    } else {
      message.sellOrderId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    return message;
  },

  toJSON(message: MsgPlaceBuyOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPlaceBuyOrder>): MsgPlaceBuyOrder {
    const message = { ...baseMsgPlaceBuyOrder } as MsgPlaceBuyOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    return message;
  },
};

const baseMsgPlaceBuyOrderResponse: object = { buyOrderId: 0 };

export const MsgPlaceBuyOrderResponse = {
  encode(
    message: MsgPlaceBuyOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyOrderId !== 0) {
      writer.uint32(8).uint64(message.buyOrderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPlaceBuyOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPlaceBuyOrderResponse,
    } as MsgPlaceBuyOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceBuyOrderResponse {
    const message = {
      ...baseMsgPlaceBuyOrderResponse,
    } as MsgPlaceBuyOrderResponse;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    return message;
  },

  toJSON(message: MsgPlaceBuyOrderResponse): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPlaceBuyOrderResponse>
  ): MsgPlaceBuyOrderResponse {
    const message = {
      ...baseMsgPlaceBuyOrderResponse,
    } as MsgPlaceBuyOrderResponse;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    return message;
  },
};

const baseMsgAcceptBuyOrder: object = {
  creator: "",
  buyOrderId: 0,
  sellerId: 0,
};

export const MsgAcceptBuyOrder = {
  encode(message: MsgAcceptBuyOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyOrderId !== 0) {
      writer.uint32(16).uint64(message.buyOrderId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(24).uint64(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptBuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptBuyOrder } as MsgAcceptBuyOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgAcceptBuyOrder {
    const message = { ...baseMsgAcceptBuyOrder } as MsgAcceptBuyOrder;
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
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    return message;
  },

  toJSON(message: MsgAcceptBuyOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcceptBuyOrder>): MsgAcceptBuyOrder {
    const message = { ...baseMsgAcceptBuyOrder } as MsgAcceptBuyOrder;
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
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    return message;
  },
};

const baseMsgAcceptBuyOrderResponse: object = {};

export const MsgAcceptBuyOrderResponse = {
  encode(
    _: MsgAcceptBuyOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAcceptBuyOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAcceptBuyOrderResponse,
    } as MsgAcceptBuyOrderResponse;
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

  fromJSON(_: any): MsgAcceptBuyOrderResponse {
    const message = {
      ...baseMsgAcceptBuyOrderResponse,
    } as MsgAcceptBuyOrderResponse;
    return message;
  },

  toJSON(_: MsgAcceptBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAcceptBuyOrderResponse>
  ): MsgAcceptBuyOrderResponse {
    const message = {
      ...baseMsgAcceptBuyOrderResponse,
    } as MsgAcceptBuyOrderResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PrepareItem(request: MsgPrepareItem): Promise<MsgPrepareItemResponse>;
  RemoveItem(request: MsgRemoveItem): Promise<MsgRemoveItemResponse>;
  ListItem(request: MsgListItem): Promise<MsgListItemResponse>;
  PlaceBuyOrder(request: MsgPlaceBuyOrder): Promise<MsgPlaceBuyOrderResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AcceptBuyOrder(
    request: MsgAcceptBuyOrder
  ): Promise<MsgAcceptBuyOrderResponse>;
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

  ListItem(request: MsgListItem): Promise<MsgListItemResponse> {
    const data = MsgListItem.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Msg", "ListItem", data);
    return promise.then((data) => MsgListItemResponse.decode(new Reader(data)));
  }

  PlaceBuyOrder(request: MsgPlaceBuyOrder): Promise<MsgPlaceBuyOrderResponse> {
    const data = MsgPlaceBuyOrder.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Msg", "PlaceBuyOrder", data);
    return promise.then((data) =>
      MsgPlaceBuyOrderResponse.decode(new Reader(data))
    );
  }

  AcceptBuyOrder(
    request: MsgAcceptBuyOrder
  ): Promise<MsgAcceptBuyOrderResponse> {
    const data = MsgAcceptBuyOrder.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Msg", "AcceptBuyOrder", data);
    return promise.then((data) =>
      MsgAcceptBuyOrderResponse.decode(new Reader(data))
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
