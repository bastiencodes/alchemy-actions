import { Chain, PublicClient, Transport } from "viem";

export type GetTokenBalancesParameters = {};

export type GetTokenBalancesReturnType = string;

export async function getTokenBalances<TChain extends Chain | undefined>(
  client: PublicClient<Transport, TChain>,
  args: GetTokenBalancesParameters
): Promise<GetTokenBalancesReturnType> {
  return "TODO";
}
