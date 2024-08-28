import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type CancelPrivateTransactionParameters = {};

export type CancelPrivateTransactionReturnType = string;

export async function cancelPrivateTransaction<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: CancelPrivateTransactionParameters
): Promise<CancelPrivateTransactionReturnType> {
  return client.request({
    method: "eth_cancelPrivateTransaction",
    params: args,
  });
}
