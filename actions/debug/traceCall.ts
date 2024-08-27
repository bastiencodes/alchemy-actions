import { BlockTag, Chain, Client, Transaction, Transport } from "viem";
import { DebugRpcSchema } from "../../types/debug";

export type TraceCallParameters = [Transaction, BlockTag];

export type TraceCallReturnType = string;

export async function traceCall<
  TClient extends Client<Transport, Chain | undefined, any, DebugRpcSchema>
>(client: TClient, args: TraceCallParameters): Promise<TraceCallReturnType> {
  return client.request({
    method: "debug_traceCall",
    params: args,
  });
}
