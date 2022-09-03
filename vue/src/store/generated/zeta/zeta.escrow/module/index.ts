// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBeginEscrow } from "./types/escrow/tx";
import { MsgCompleteEscrowNoDispute } from "./types/escrow/tx";
import { MsgJoinEscrow } from "./types/escrow/tx";
import { MsgAddBuyerEvidence } from "./types/escrow/tx";
import { MsgRaiseBuyerDispute } from "./types/escrow/tx";
import { MsgAddSellerEvidence } from "./types/escrow/tx";


const types = [
  ["/zeta.escrow.MsgBeginEscrow", MsgBeginEscrow],
  ["/zeta.escrow.MsgCompleteEscrowNoDispute", MsgCompleteEscrowNoDispute],
  ["/zeta.escrow.MsgJoinEscrow", MsgJoinEscrow],
  ["/zeta.escrow.MsgAddBuyerEvidence", MsgAddBuyerEvidence],
  ["/zeta.escrow.MsgRaiseBuyerDispute", MsgRaiseBuyerDispute],
  ["/zeta.escrow.MsgAddSellerEvidence", MsgAddSellerEvidence],
  
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
    msgBeginEscrow: (data: MsgBeginEscrow): EncodeObject => ({ typeUrl: "/zeta.escrow.MsgBeginEscrow", value: MsgBeginEscrow.fromPartial( data ) }),
    msgCompleteEscrowNoDispute: (data: MsgCompleteEscrowNoDispute): EncodeObject => ({ typeUrl: "/zeta.escrow.MsgCompleteEscrowNoDispute", value: MsgCompleteEscrowNoDispute.fromPartial( data ) }),
    msgJoinEscrow: (data: MsgJoinEscrow): EncodeObject => ({ typeUrl: "/zeta.escrow.MsgJoinEscrow", value: MsgJoinEscrow.fromPartial( data ) }),
    msgAddBuyerEvidence: (data: MsgAddBuyerEvidence): EncodeObject => ({ typeUrl: "/zeta.escrow.MsgAddBuyerEvidence", value: MsgAddBuyerEvidence.fromPartial( data ) }),
    msgRaiseBuyerDispute: (data: MsgRaiseBuyerDispute): EncodeObject => ({ typeUrl: "/zeta.escrow.MsgRaiseBuyerDispute", value: MsgRaiseBuyerDispute.fromPartial( data ) }),
    msgAddSellerEvidence: (data: MsgAddSellerEvidence): EncodeObject => ({ typeUrl: "/zeta.escrow.MsgAddSellerEvidence", value: MsgAddSellerEvidence.fromPartial( data ) }),
    
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
