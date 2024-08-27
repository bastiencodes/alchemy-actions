import { Chain, PublicClient, Transport } from "viem";

export type GetTransactionReceiptsParameters = {};

export type GetTransactionReceiptsReturnType = string;

export async function getTransactionReceipts<TChain extends Chain | undefined>(
  client: PublicClient<Transport, TChain>,
  args: GetTransactionReceiptsParameters
): Promise<GetTransactionReceiptsReturnType> {
  return "TODO";
}
