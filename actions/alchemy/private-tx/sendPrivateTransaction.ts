import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type SendPrivateTransactionParameters = {};

export type SendPrivateTransactionReturnType = string;

export async function sendPrivateTransaction<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: SendPrivateTransactionParameters
): Promise<SendPrivateTransactionReturnType> {
  return client.request({
    method: "eth_sendPrivateTransaction",
    params: args,
  });
}
