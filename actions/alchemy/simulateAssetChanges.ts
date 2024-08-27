import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../types/alchemy";

export type SimulateAssetChangesParameters = {};

export type SimulateAssetChangesReturnType = string;

export async function simulateAssetChanges<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: SimulateAssetChangesParameters
): Promise<SimulateAssetChangesReturnType> {
  return client.request({
    method: "alchemy_simulateAssetChanges",
    params: args,
  });
}
