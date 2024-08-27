import { Chain, Client, Hex, Transport } from "viem";
import { AlchemyRpcSchema } from "../../types/alchemy";

export type GetTokenAllowanceParameters = {
  contract: Hex;
  owner: Hex;
  spender: Hex;
};

export type GetTokenAllowanceReturnType = number;

export async function getTokenAllowance<
  TClient extends Client<Transport, Chain | undefined, any, AlchemyRpcSchema>
>(
  client: TClient,
  args: GetTokenAllowanceParameters
): Promise<GetTokenAllowanceReturnType> {
  return client.request({
    method: "alchemy_getTokenAllowance",
    params: args,
  });
}
