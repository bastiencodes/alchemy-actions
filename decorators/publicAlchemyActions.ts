import { Account, Chain, PublicClient, Transport } from "viem";

import {
  getAssetTransfers,
  type GetAssetTransfersParameters,
  type GetAssetTransfersReturnType,
} from "../actions/alchemy/getAssetTransfers.js";

import {
  getTokenAllowance,
  type GetTokenAllowanceParameters,
  type GetTokenAllowanceReturnType,
} from "../actions/alchemy/getTokenAllowance.js";

import {
  getTokenBalances,
  type GetTokenBalancesParameters,
  type GetTokenBalancesReturnType,
} from "../actions/alchemy/getTokenBalances.js";

import {
  getTokenMetadata,
  type GetTokenMetadataParameters,
  type GetTokenMetadataReturnType,
} from "../actions/alchemy/getTokenMetadata.js";

import {
  getTransactionReceipts,
  type GetTransactionReceiptsParameters,
  type GetTransactionReceiptsReturnType,
} from "../actions/alchemy/getTransactionReceipts.js";
import { AlchemyRpcSchema } from "../types/alchemy.js";

export type PublicAlchemyActions<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
> = {
  getAssetTransfers: (
    args: GetAssetTransfersParameters
  ) => Promise<GetAssetTransfersReturnType>;

  getTokenAllowance: (
    args: GetTokenAllowanceParameters
  ) => Promise<GetTokenAllowanceReturnType>;

  getTokenBalances: (
    args: GetTokenBalancesParameters
  ) => Promise<GetTokenBalancesReturnType>;

  getTokenMetadata: (
    args: GetTokenMetadataParameters
  ) => Promise<GetTokenMetadataReturnType>;

  getTransactionReceipts: (
    args: GetTransactionReceiptsParameters
  ) => Promise<GetTransactionReceiptsReturnType>;
};

export const publicAlchemyActions = <TTransport extends Transport = Transport>(
  client: PublicClient<TTransport, Chain, Account | undefined, AlchemyRpcSchema>
): PublicAlchemyActions => ({
  getAssetTransfers: (args) => getAssetTransfers(client, args),
  getTokenAllowance: (args) => getTokenAllowance(client, args),
  getTokenBalances: (args) => getTokenBalances(client, args),
  getTokenMetadata: (args) => getTokenMetadata(client, args),
  getTransactionReceipts: (args) => getTransactionReceipts(client, args),
});
