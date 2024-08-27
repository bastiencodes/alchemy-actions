import { Chain, Client, Transport } from "viem";
import { AlchemyRpcSchema } from "../../../types/alchemy";

export type SimulateExecutionParameters = {};

export type SimulateExecutionReturnType = string;

export async function simulateExecution<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: SimulateExecutionParameters
): Promise<SimulateExecutionReturnType> {
  return client.request({
    method: "alchemy_simulateExecution",
    params: args,
  });
}
