// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMembershipApplication } from "./types/whitelist/tx";
import { MsgBuyerApplication } from "./types/whitelist/tx";
import { MsgVoterApplication } from "./types/whitelist/tx";
import { MsgSellerApplication } from "./types/whitelist/tx";


const types = [
  ["/zeta.whitelist.MsgMembershipApplication", MsgMembershipApplication],
  ["/zeta.whitelist.MsgBuyerApplication", MsgBuyerApplication],
  ["/zeta.whitelist.MsgVoterApplication", MsgVoterApplication],
  ["/zeta.whitelist.MsgSellerApplication", MsgSellerApplication],
  
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
    msgMembershipApplication: (data: MsgMembershipApplication): EncodeObject => ({ typeUrl: "/zeta.whitelist.MsgMembershipApplication", value: MsgMembershipApplication.fromPartial( data ) }),
    msgBuyerApplication: (data: MsgBuyerApplication): EncodeObject => ({ typeUrl: "/zeta.whitelist.MsgBuyerApplication", value: MsgBuyerApplication.fromPartial( data ) }),
    msgVoterApplication: (data: MsgVoterApplication): EncodeObject => ({ typeUrl: "/zeta.whitelist.MsgVoterApplication", value: MsgVoterApplication.fromPartial( data ) }),
    msgSellerApplication: (data: MsgSellerApplication): EncodeObject => ({ typeUrl: "/zeta.whitelist.MsgSellerApplication", value: MsgSellerApplication.fromPartial( data ) }),
    
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
