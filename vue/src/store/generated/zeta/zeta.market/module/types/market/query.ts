/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../market/params";
import { Item } from "../market/item";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { SellOrder } from "../market/sell_order";
import { BuyOrder } from "../market/buy_order";

export const protobufPackage = "zeta.market";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetItemRequest {
  itemId: number;
}

export interface QueryGetItemResponse {
  item: Item | undefined;
}

export interface QueryAllItemRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllItemResponse {
  item: Item[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSellOrderRequest {
  sellOrderId: number;
}

export interface QueryGetSellOrderResponse {
  sellOrder: SellOrder | undefined;
}

export interface QueryAllSellOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSellOrderResponse {
  sellOrder: SellOrder[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBuyOrderRequest {
  buyOrderId: number;
}

export interface QueryGetBuyOrderResponse {
  buyOrder: BuyOrder | undefined;
}

export interface QueryAllBuyOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyOrderResponse {
  buyOrder: BuyOrder[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetItemRequest: object = { itemId: 0 };

export const QueryGetItemRequest = {
  encode(
    message: QueryGetItemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest;
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

  fromJSON(object: any): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    return message;
  },
};

const baseQueryGetItemResponse: object = {};

export const QueryGetItemResponse = {
  encode(
    message: QueryGetItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = Item.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse;
    if (object.item !== undefined && object.item !== null) {
      message.item = Item.fromJSON(object.item);
    } else {
      message.item = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse;
    if (object.item !== undefined && object.item !== null) {
      message.item = Item.fromPartial(object.item);
    } else {
      message.item = undefined;
    }
    return message;
  },
};

const baseQueryAllItemRequest: object = {};

export const QueryAllItemRequest = {
  encode(
    message: QueryAllItemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllItemRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllItemRequest>): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllItemResponse: object = {};

export const QueryAllItemResponse = {
  encode(
    message: QueryAllItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.item) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse;
    message.item = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item.push(Item.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse;
    message.item = [];
    if (object.item !== undefined && object.item !== null) {
      for (const e of object.item) {
        message.item.push(Item.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllItemResponse): unknown {
    const obj: any = {};
    if (message.item) {
      obj.item = message.item.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.item = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllItemResponse>): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse;
    message.item = [];
    if (object.item !== undefined && object.item !== null) {
      for (const e of object.item) {
        message.item.push(Item.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSellOrderRequest: object = { sellOrderId: 0 };

export const QueryGetSellOrderRequest = {
  encode(
    message: QueryGetSellOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellOrderId !== 0) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellOrderRequest,
    } as QueryGetSellOrderRequest;
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

  fromJSON(object: any): QueryGetSellOrderRequest {
    const message = {
      ...baseQueryGetSellOrderRequest,
    } as QueryGetSellOrderRequest;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = Number(object.sellOrderId);
    } else {
      message.sellOrderId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSellOrderRequest): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellOrderRequest>
  ): QueryGetSellOrderRequest {
    const message = {
      ...baseQueryGetSellOrderRequest,
    } as QueryGetSellOrderRequest;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = 0;
    }
    return message;
  },
};

const baseQueryGetSellOrderResponse: object = {};

export const QueryGetSellOrderResponse = {
  encode(
    message: QueryGetSellOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellOrder !== undefined) {
      SellOrder.encode(message.sellOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellOrderResponse,
    } as QueryGetSellOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrder = SellOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellOrderResponse {
    const message = {
      ...baseQueryGetSellOrderResponse,
    } as QueryGetSellOrderResponse;
    if (object.sellOrder !== undefined && object.sellOrder !== null) {
      message.sellOrder = SellOrder.fromJSON(object.sellOrder);
    } else {
      message.sellOrder = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSellOrderResponse): unknown {
    const obj: any = {};
    message.sellOrder !== undefined &&
      (obj.sellOrder = message.sellOrder
        ? SellOrder.toJSON(message.sellOrder)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellOrderResponse>
  ): QueryGetSellOrderResponse {
    const message = {
      ...baseQueryGetSellOrderResponse,
    } as QueryGetSellOrderResponse;
    if (object.sellOrder !== undefined && object.sellOrder !== null) {
      message.sellOrder = SellOrder.fromPartial(object.sellOrder);
    } else {
      message.sellOrder = undefined;
    }
    return message;
  },
};

const baseQueryAllSellOrderRequest: object = {};

export const QueryAllSellOrderRequest = {
  encode(
    message: QueryAllSellOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSellOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellOrderRequest,
    } as QueryAllSellOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellOrderRequest {
    const message = {
      ...baseQueryAllSellOrderRequest,
    } as QueryAllSellOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellOrderRequest>
  ): QueryAllSellOrderRequest {
    const message = {
      ...baseQueryAllSellOrderRequest,
    } as QueryAllSellOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSellOrderResponse: object = {};

export const QueryAllSellOrderResponse = {
  encode(
    message: QueryAllSellOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sellOrder) {
      SellOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSellOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellOrderResponse,
    } as QueryAllSellOrderResponse;
    message.sellOrder = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrder.push(SellOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellOrderResponse {
    const message = {
      ...baseQueryAllSellOrderResponse,
    } as QueryAllSellOrderResponse;
    message.sellOrder = [];
    if (object.sellOrder !== undefined && object.sellOrder !== null) {
      for (const e of object.sellOrder) {
        message.sellOrder.push(SellOrder.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellOrderResponse): unknown {
    const obj: any = {};
    if (message.sellOrder) {
      obj.sellOrder = message.sellOrder.map((e) =>
        e ? SellOrder.toJSON(e) : undefined
      );
    } else {
      obj.sellOrder = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellOrderResponse>
  ): QueryAllSellOrderResponse {
    const message = {
      ...baseQueryAllSellOrderResponse,
    } as QueryAllSellOrderResponse;
    message.sellOrder = [];
    if (object.sellOrder !== undefined && object.sellOrder !== null) {
      for (const e of object.sellOrder) {
        message.sellOrder.push(SellOrder.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBuyOrderRequest: object = { buyOrderId: 0 };

export const QueryGetBuyOrderRequest = {
  encode(
    message: QueryGetBuyOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyOrderId !== 0) {
      writer.uint32(8).uint64(message.buyOrderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyOrderRequest,
    } as QueryGetBuyOrderRequest;
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

  fromJSON(object: any): QueryGetBuyOrderRequest {
    const message = {
      ...baseQueryGetBuyOrderRequest,
    } as QueryGetBuyOrderRequest;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBuyOrderRequest): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyOrderRequest>
  ): QueryGetBuyOrderRequest {
    const message = {
      ...baseQueryGetBuyOrderRequest,
    } as QueryGetBuyOrderRequest;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    return message;
  },
};

const baseQueryGetBuyOrderResponse: object = {};

export const QueryGetBuyOrderResponse = {
  encode(
    message: QueryGetBuyOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyOrder !== undefined) {
      BuyOrder.encode(message.buyOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyOrderResponse,
    } as QueryGetBuyOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrder = BuyOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyOrderResponse {
    const message = {
      ...baseQueryGetBuyOrderResponse,
    } as QueryGetBuyOrderResponse;
    if (object.buyOrder !== undefined && object.buyOrder !== null) {
      message.buyOrder = BuyOrder.fromJSON(object.buyOrder);
    } else {
      message.buyOrder = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyOrderResponse): unknown {
    const obj: any = {};
    message.buyOrder !== undefined &&
      (obj.buyOrder = message.buyOrder
        ? BuyOrder.toJSON(message.buyOrder)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyOrderResponse>
  ): QueryGetBuyOrderResponse {
    const message = {
      ...baseQueryGetBuyOrderResponse,
    } as QueryGetBuyOrderResponse;
    if (object.buyOrder !== undefined && object.buyOrder !== null) {
      message.buyOrder = BuyOrder.fromPartial(object.buyOrder);
    } else {
      message.buyOrder = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyOrderRequest: object = {};

export const QueryAllBuyOrderRequest = {
  encode(
    message: QueryAllBuyOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyOrderRequest,
    } as QueryAllBuyOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyOrderRequest {
    const message = {
      ...baseQueryAllBuyOrderRequest,
    } as QueryAllBuyOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyOrderRequest>
  ): QueryAllBuyOrderRequest {
    const message = {
      ...baseQueryAllBuyOrderRequest,
    } as QueryAllBuyOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyOrderResponse: object = {};

export const QueryAllBuyOrderResponse = {
  encode(
    message: QueryAllBuyOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyOrder) {
      BuyOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBuyOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyOrderResponse,
    } as QueryAllBuyOrderResponse;
    message.buyOrder = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrder.push(BuyOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyOrderResponse {
    const message = {
      ...baseQueryAllBuyOrderResponse,
    } as QueryAllBuyOrderResponse;
    message.buyOrder = [];
    if (object.buyOrder !== undefined && object.buyOrder !== null) {
      for (const e of object.buyOrder) {
        message.buyOrder.push(BuyOrder.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyOrderResponse): unknown {
    const obj: any = {};
    if (message.buyOrder) {
      obj.buyOrder = message.buyOrder.map((e) =>
        e ? BuyOrder.toJSON(e) : undefined
      );
    } else {
      obj.buyOrder = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyOrderResponse>
  ): QueryAllBuyOrderResponse {
    const message = {
      ...baseQueryAllBuyOrderResponse,
    } as QueryAllBuyOrderResponse;
    message.buyOrder = [];
    if (object.buyOrder !== undefined && object.buyOrder !== null) {
      for (const e of object.buyOrder) {
        message.buyOrder.push(BuyOrder.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Item by index. */
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>;
  /** Queries a list of Item items. */
  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse>;
  /** Queries a SellOrder by index. */
  SellOrder(
    request: QueryGetSellOrderRequest
  ): Promise<QueryGetSellOrderResponse>;
  /** Queries a list of SellOrder items. */
  SellOrderAll(
    request: QueryAllSellOrderRequest
  ): Promise<QueryAllSellOrderResponse>;
  /** Queries a BuyOrder by index. */
  BuyOrder(request: QueryGetBuyOrderRequest): Promise<QueryGetBuyOrderResponse>;
  /** Queries a list of BuyOrder items. */
  BuyOrderAll(
    request: QueryAllBuyOrderRequest
  ): Promise<QueryAllBuyOrderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse> {
    const data = QueryGetItemRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "Item", data);
    return promise.then((data) =>
      QueryGetItemResponse.decode(new Reader(data))
    );
  }

  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse> {
    const data = QueryAllItemRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "ItemAll", data);
    return promise.then((data) =>
      QueryAllItemResponse.decode(new Reader(data))
    );
  }

  SellOrder(
    request: QueryGetSellOrderRequest
  ): Promise<QueryGetSellOrderResponse> {
    const data = QueryGetSellOrderRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "SellOrder", data);
    return promise.then((data) =>
      QueryGetSellOrderResponse.decode(new Reader(data))
    );
  }

  SellOrderAll(
    request: QueryAllSellOrderRequest
  ): Promise<QueryAllSellOrderResponse> {
    const data = QueryAllSellOrderRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "SellOrderAll", data);
    return promise.then((data) =>
      QueryAllSellOrderResponse.decode(new Reader(data))
    );
  }

  BuyOrder(
    request: QueryGetBuyOrderRequest
  ): Promise<QueryGetBuyOrderResponse> {
    const data = QueryGetBuyOrderRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "BuyOrder", data);
    return promise.then((data) =>
      QueryGetBuyOrderResponse.decode(new Reader(data))
    );
  }

  BuyOrderAll(
    request: QueryAllBuyOrderRequest
  ): Promise<QueryAllBuyOrderResponse> {
    const data = QueryAllBuyOrderRequest.encode(request).finish();
    const promise = this.rpc.request("zeta.market.Query", "BuyOrderAll", data);
    return promise.then((data) =>
      QueryAllBuyOrderResponse.decode(new Reader(data))
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
