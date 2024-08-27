import {
  Account,
  Chain,
  Hex,
  PublicClient,
  PublicRpcSchema,
  Transport,
} from "viem";
import { AlchemyRpcSchema } from "../../types/alchemy";

export type GetTokenAllowanceParameters = {
  contract: Hex;
  owner: Hex;
  spender: Hex;
};

export type GetTokenAllowanceReturnType = number;

export async function getTokenAllowance<
  TChain extends Chain | undefined,
  TAccount extends Account | undefined
>(
  client: PublicClient<
    Transport,
    TChain,
    TAccount,
    [...PublicRpcSchema, ...AlchemyRpcSchema]
  >,
  args: GetTokenAllowanceParameters
): Promise<GetTokenAllowanceReturnType> {
  return client.request({
    method: "alchemy_getTokenAllowance",
    params: args,
  });
}
