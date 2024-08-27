import {
  type GetAssetTransfersReturnType,
  type GetAssetTransfersParameters,
} from "../actions/alchemy/getAssetTransfers";

import {
  type GetTokenAllowanceParameters,
  type GetTokenAllowanceReturnType,
} from "../actions/alchemy/getTokenAllowance";

import {
  type GetTokenBalancesParameters,
  type GetTokenBalancesReturnType,
} from "../actions/alchemy/getTokenBalances";

import {
  type GetTokenMetadataParameters,
  type GetTokenMetadataReturnType,
} from "../actions/alchemy/getTokenMetadata";

import {
  type GetTransactionReceiptsParameters,
  type GetTransactionReceiptsReturnType,
} from "../actions/alchemy/getTransactionReceipts";

import {
  type SimulateAssetChangesParameters,
  type SimulateAssetChangesReturnType,
} from "../actions/alchemy/simulateAssetChanges";

import {
  type SimulateAssetChangesBundleParameters,
  type SimulateAssetChangesBundleReturnType,
} from "../actions/alchemy/simulateAssetChangesBundle";

import {
  type SimulateExecutionParameters,
  type SimulateExecutionReturnType,
} from "../actions/alchemy/simulateExecution";

import {
  type SimulateExecutionBundleParameters,
  type SimulateExecutionBundleReturnType,
} from "../actions/alchemy/simulateExecutionBundle";

import {
  type GetGasOptimizedTransactionStatusParameters,
  type GetGasOptimizedTransactionStatusReturnType,
} from "../actions/alchemy/getGasOptimizedTransactionStatus";

import {
  type SendGasOptimizedTransactionParameters,
  type SendGasOptimizedTransactionReturnType,
} from "../actions/alchemy/sendGasOptimizedTransaction";

export type AlchemyRpcSchema = [
  {
    Method: "alchemy_getAssetTransfers";
    Parameters: GetAssetTransfersParameters;
    ReturnType: GetAssetTransfersReturnType;
  },
  {
    Method: "alchemy_getTokenAllowance";
    Parameters: GetTokenAllowanceParameters;
    ReturnType: GetTokenAllowanceReturnType;
  },
  {
    Method: "alchemy_getTokenBalances";
    Parameters: GetTokenBalancesParameters;
    ReturnType: GetTokenBalancesReturnType;
  },
  {
    Method: "alchemy_getTokenMetadata";
    Parameters: GetTokenMetadataParameters;
    ReturnType: GetTokenMetadataReturnType;
  },
  {
    Method: "alchemy_getTransactionReceipts";
    Parameters: GetTransactionReceiptsParameters;
    ReturnType: GetTransactionReceiptsReturnType;
  },
  {
    Method: "alchemy_simulateAssetChanges";
    Parameters: SimulateAssetChangesParameters;
    ReturnType: SimulateAssetChangesReturnType;
  },
  {
    Method: "alchemy_simulateAssetChangesBundle";
    Parameters: SimulateAssetChangesBundleParameters;
    ReturnType: SimulateAssetChangesBundleReturnType;
  },
  {
    Method: "alchemy_simulateExecution";
    Parameters: SimulateExecutionParameters;
    ReturnType: SimulateExecutionReturnType;
  },
  {
    Method: "alchemy_simulateExecutionBundle";
    Parameters: SimulateExecutionBundleParameters;
    ReturnType: SimulateExecutionBundleReturnType;
  },
  {
    Method: "alchemy_getGasOptimizedTransactionStatus";
    Parameters: GetGasOptimizedTransactionStatusParameters;
    ReturnType: GetGasOptimizedTransactionStatusReturnType;
  },
  {
    Method: "alchemy_sendGasOptimizedTransaction";
    Parameters: SendGasOptimizedTransactionParameters;
    ReturnType: SendGasOptimizedTransactionReturnType;
  }
];
