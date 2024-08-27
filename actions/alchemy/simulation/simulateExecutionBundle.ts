import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type SimulateExecutionBundleParameters = {};

export type SimulateExecutionBundleReturnType = string;

export async function simulateExecutionBundle<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: SimulateExecutionBundleParameters
): Promise<SimulateExecutionBundleReturnType> {
  return client.request({
    method: "alchemy_simulateExecutionBundle",
    params: args,
  });
}
