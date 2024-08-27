import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../types/alchemy";

export type GetTransactionReceiptsParameters = {};

export type GetTransactionReceiptsReturnType = string;

export async function getTransactionReceipts<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: GetTransactionReceiptsParameters
): Promise<GetTransactionReceiptsReturnType> {
  return client.request({
    method: "alchemy_getTransactionReceipts",
    params: args,
  });
}
