import { Chain, PublicClient, Transport } from "viem";

export type GetTokenMetadataParameters = {};

export type GetTokenMetadataReturnType = string;

export async function getTokenMetadata<TChain extends Chain | undefined>(
  client: PublicClient<Transport, TChain>,
  args: GetTokenMetadataParameters
): Promise<GetTokenMetadataReturnType> {
  return "TODO";
}
