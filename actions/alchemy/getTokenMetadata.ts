import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../types/alchemy";

export type GetTokenMetadataParameters = {};

export type GetTokenMetadataReturnType = string;

export async function getTokenMetadata<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: GetTokenMetadataParameters
): Promise<GetTokenMetadataReturnType> {
  return client.request({
    method: "alchemy_getTokenMetadata",
    params: args,
  });
}
