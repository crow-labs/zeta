// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgListItem } from "./types/market/tx";
import { MsgPlaceBuyOrder } from "./types/market/tx";
import { MsgPrepareItem } from "./types/market/tx";
import { MsgRemoveItem } from "./types/market/tx";
import { MsgAcceptBuyOrder } from "./types/market/tx";


const types = [
  ["/zeta.market.MsgListItem", MsgListItem],
  ["/zeta.market.MsgPlaceBuyOrder", MsgPlaceBuyOrder],
  ["/zeta.market.MsgPrepareItem", MsgPrepareItem],
  ["/zeta.market.MsgRemoveItem", MsgRemoveItem],
  ["/zeta.market.MsgAcceptBuyOrder", MsgAcceptBuyOrder],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgListItem: (data: MsgListItem): EncodeObject => ({ typeUrl: "/zeta.market.MsgListItem", value: MsgListItem.fromPartial( data ) }),
    msgPlaceBuyOrder: (data: MsgPlaceBuyOrder): EncodeObject => ({ typeUrl: "/zeta.market.MsgPlaceBuyOrder", value: MsgPlaceBuyOrder.fromPartial( data ) }),
    msgPrepareItem: (data: MsgPrepareItem): EncodeObject => ({ typeUrl: "/zeta.market.MsgPrepareItem", value: MsgPrepareItem.fromPartial( data ) }),
    msgRemoveItem: (data: MsgRemoveItem): EncodeObject => ({ typeUrl: "/zeta.market.MsgRemoveItem", value: MsgRemoveItem.fromPartial( data ) }),
    msgAcceptBuyOrder: (data: MsgAcceptBuyOrder): EncodeObject => ({ typeUrl: "/zeta.market.MsgAcceptBuyOrder", value: MsgAcceptBuyOrder.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
