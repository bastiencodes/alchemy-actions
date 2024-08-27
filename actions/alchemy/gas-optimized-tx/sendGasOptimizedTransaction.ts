import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type SendGasOptimizedTransactionParameters = {};

export type SendGasOptimizedTransactionReturnType = string;

export async function sendGasOptimizedTransaction<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: SendGasOptimizedTransactionParameters
): Promise<SendGasOptimizedTransactionReturnType> {
  return client.request({
    method: "alchemy_sendGasOptimizedTransaction",
    params: args,
  });
}
