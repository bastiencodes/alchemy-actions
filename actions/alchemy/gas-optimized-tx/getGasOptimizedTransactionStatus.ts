import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type GetGasOptimizedTransactionStatusParameters = {};

export type GetGasOptimizedTransactionStatusReturnType = string;

export async function getGasOptimizedTransactionStatus<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: GetGasOptimizedTransactionStatusParameters
): Promise<GetGasOptimizedTransactionStatusReturnType> {
  return client.request({
    method: "alchemy_getGasOptimizedTransactionStatus",
    params: args,
  });
}
