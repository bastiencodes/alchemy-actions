import { Client } from "viem";

import {
  getAssetTransfers,
  type GetAssetTransfersParameters,
  type GetAssetTransfersReturnType,
} from "../actions/alchemy/transfers/getAssetTransfers.js";

import {
  getTokenAllowance,
  type GetTokenAllowanceParameters,
  type GetTokenAllowanceReturnType,
} from "../actions/alchemy/token/getTokenAllowance.js";

import {
  getTokenBalances,
  type GetTokenBalancesParameters,
  type GetTokenBalancesReturnType,
} from "../actions/alchemy/token/getTokenBalances.js";

import {
  getTokenMetadata,
  type GetTokenMetadataParameters,
  type GetTokenMetadataReturnType,
} from "../actions/alchemy/token/getTokenMetadata.js";

import {
  getTransactionReceipts,
  type GetTransactionReceiptsParameters,
  type GetTransactionReceiptsReturnType,
} from "../actions/alchemy/tx-receipts/getTransactionReceipts.js";

import {
  simulateAssetChanges,
  type SimulateAssetChangesParameters,
  type SimulateAssetChangesReturnType,
} from "../actions/alchemy/simulation/simulateAssetChanges.js";

import {
  simulateAssetChangesBundle,
  type SimulateAssetChangesBundleParameters,
  type SimulateAssetChangesBundleReturnType,
} from "../actions/alchemy/simulation/simulateAssetChangesBundle.js";

import {
  simulateExecution,
  type SimulateExecutionParameters,
  type SimulateExecutionReturnType,
} from "../actions/alchemy/simulation/simulateExecution.js";

import {
  simulateExecutionBundle,
  type SimulateExecutionBundleParameters,
  type SimulateExecutionBundleReturnType,
} from "../actions/alchemy/simulation/simulateExecutionBundle.js";

import {
  getGasOptimizedTransactionStatus,
  type GetGasOptimizedTransactionStatusParameters,
  type GetGasOptimizedTransactionStatusReturnType,
} from "../actions/alchemy/gas-optimized-tx/getGasOptimizedTransactionStatus.js";

import {
  sendGasOptimizedTransaction,
  type SendGasOptimizedTransactionParameters,
  type SendGasOptimizedTransactionReturnType,
} from "../actions/alchemy/gas-optimized-tx/sendGasOptimizedTransaction.js";

export type PublicAlchemyActions = {
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

export const publicAlchemyActions = (client: Client): PublicAlchemyActions => ({
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
