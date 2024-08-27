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
  }
];
