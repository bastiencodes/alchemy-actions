import { Account, Chain, PublicClient, Transport } from "viem";

import { AlchemyRpcSchema } from "../types/alchemy.js";

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

import {
  simulateAssetChanges,
  type SimulateAssetChangesParameters,
  type SimulateAssetChangesReturnType,
} from "../actions/alchemy/simulateAssetChanges.js";

import {
  simulateAssetChangesBundle,
  type SimulateAssetChangesBundleParameters,
  type SimulateAssetChangesBundleReturnType,
} from "../actions/alchemy/simulateAssetChangesBundle.js";

import {
  simulateExecution,
  type SimulateExecutionParameters,
  type SimulateExecutionReturnType,
} from "../actions/alchemy/simulateExecution.js";

import {
  simulateExecutionBundle,
  type SimulateExecutionBundleParameters,
  type SimulateExecutionBundleReturnType,
} from "../actions/alchemy/simulateExecutionBundle.js";

import {
  getGasOptimizedTransactionStatus,
  type GetGasOptimizedTransactionStatusParameters,
  type GetGasOptimizedTransactionStatusReturnType,
} from "../actions/alchemy/getGasOptimizedTransactionStatus.js";

import {
  sendGasOptimizedTransaction,
  type SendGasOptimizedTransactionParameters,
  type SendGasOptimizedTransactionReturnType,
} from "../actions/alchemy/sendGasOptimizedTransaction.js";

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

  simulateAssetChanges: (
    args: SimulateAssetChangesParameters
  ) => Promise<SimulateAssetChangesReturnType>;

  simulateAssetChangesBundle: (
    args: SimulateAssetChangesBundleParameters
  ) => Promise<SimulateAssetChangesBundleReturnType>;

  simulateExecution: (
    args: SimulateExecutionParameters
  ) => Promise<SimulateExecutionReturnType>;

  simulateExecutionBundle: (
    args: SimulateExecutionBundleParameters
  ) => Promise<SimulateExecutionBundleReturnType>;

  getGasOptimizedTransactionStatus: (
    args: GetGasOptimizedTransactionStatusParameters
  ) => Promise<GetGasOptimizedTransactionStatusReturnType>;

  sendGasOptimizedTransaction: (
    args: SendGasOptimizedTransactionParameters
  ) => Promise<SendGasOptimizedTransactionReturnType>;
};

export const publicAlchemyActions = <TTransport extends Transport = Transport>(
  client: PublicClient<TTransport, Chain, Account | undefined, AlchemyRpcSchema>
): PublicAlchemyActions => ({
  getAssetTransfers: (args) => getAssetTransfers(client, args),
  getTokenAllowance: (args) => getTokenAllowance(client, args),
  getTokenBalances: (args) => getTokenBalances(client, args),
  getTokenMetadata: (args) => getTokenMetadata(client, args),
  getTransactionReceipts: (args) => getTransactionReceipts(client, args),
  simulateAssetChanges: (args) => simulateAssetChanges(client, args),
  simulateAssetChangesBundle: (args) =>
    simulateAssetChangesBundle(client, args),
  simulateExecution: (args) => simulateExecution(client, args),
  simulateExecutionBundle: (args) => simulateExecutionBundle(client, args),
  getGasOptimizedTransactionStatus: (args) =>
    getGasOptimizedTransactionStatus(client, args),
  sendGasOptimizedTransaction: (args) =>
    sendGasOptimizedTransaction(client, args),
});
