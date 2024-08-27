import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type GetTokenBalancesParameters = {};

export type GetTokenBalancesReturnType = string;

export async function getTokenBalances<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: GetTokenBalancesParameters
): Promise<GetTokenBalancesReturnType> {
  return client.request({
    method: "alchemy_getTokenBalances",
    params: args,
  });
}
