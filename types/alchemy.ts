import {
  type GetAssetTransfersReturnType,
  type GetAssetTransfersParameters,
} from "../actions/alchemy/getAssetTransfers";

export type AlchemyRpcSchema = [
  {
    Method: "alchemy_getAssetTransfers";
    Parameters: GetAssetTransfersParameters;
    ReturnType: GetAssetTransfersReturnType;
  },
  {
    Method: "alchemy_getTokenAllowance";
    Parameters: [];
    ReturnType: string;
  },
  {
    Method: "alchemy_getTokenBalances";
    Parameters: [];
    ReturnType: string;
  },
  {
    Method: "alchemy_getTokenMetadata";
    Parameters: [];
    ReturnType: string;
  },
  {
    Method: "alchemy_getTransactionReceipts";
    Parameters: [];
    ReturnType: string;
  }
];
