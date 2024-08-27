import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type SimulateAssetChangesBundleParameters = {};

export type SimulateAssetChangesBundleReturnType = string;

export async function simulateAssetChangesBundle<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: SimulateAssetChangesBundleParameters
): Promise<SimulateAssetChangesBundleReturnType> {
  return client.request({
    method: "alchemy_simulateAssetChangesBundle",
    params: args,
  });
}
