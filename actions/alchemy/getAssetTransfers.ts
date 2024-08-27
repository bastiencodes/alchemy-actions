import {
  Account,
  Chain,
  Hex,
  PublicClient,
  PublicRpcSchema,
  RpcSchema,
  Transport,
} from "viem";
import { type AlchemyRpcSchema } from "../../types/alchemy";

type AssetTransferCategory =
  | "external"
  | "internal"
  | "erc20"
  | "erc721"
  | "erc1155"
  | "specialnft";

export type GetAssetTransfersParameters = {
  /**
   * The starting block to check for transfers. This value is inclusive and
   * defaults to `0x0` if omitted.
   */
  fromBlock?: Hex | number | "latest" | "indexed";

  /**
   * The ending block to check for transfers. This value is inclusive and
   * defaults to the latest block if omitted.
   */
  toBlock?: Hex | number | "latest" | "indexed";

  /**
   * The from address to filter transfers by. This value defaults to a wildcard
   * for all addresses if omitted.
   */
  fromAddress?: Hex;

  /**
   * The to address to filter transfers by. This value defaults to a wildcard
   * for all address if omitted.
   */
  toAddress?: Hex;

  /**
   * List of contract addresses to filter for - only applies to "erc20",
   * "erc721", "erc1155" transfers. Defaults to all address if omitted.
   */
  contractAddresses?: Hex[];

  /** REQUIRED field. An array of categories to get transfers for. */
  category: AssetTransferCategory[];

  /**
   * Whether to return results in ascending or descending order by block number.
   * Defaults to ascending if omitted.
   */
  order?: "asc" | "desc";

  /**
   * Whether to include additional metadata about each transfer event. Defaults
   * to `false` if omitted.
   */
  withMetadata?: boolean;

  /**
   * Whether to exclude transfers with zero value. Note that zero value is
   * different than null value. Defaults to `true` if omitted.
   */
  excludeZeroValue?: boolean;

  /** The maximum number of results to return per page. Defaults to 1000 if omitted. */
  maxCount?: Hex;

  /**
   * Optional page key to use for pagination.
   */
  pageKey?: string;
};

/**
 * Metadata object returned in a {@link AssetTransfersResult} object if the asset
 * transferred is an ERC1155.
 *
 * @public
 */
type ERC1155Metadata = {
  tokenId: string;
  value: string;
};

/**
 * Information about the underlying contract for the asset that was transferred
 * in a {@link AssetTransfersResult} object.
 *
 * @public
 */
type RawContract = {
  /**
   * The raw transfer value as a hex string. `null` if the transfer was for an
   * ERC721 or ERC1155 token.
   */
  value: string | null;

  /** The contract address. `null` if it was an internal or external transfer. */
  address: Hex | null;

  /**
   * The number of decimals in the contract as a hex string. `null` if the value
   * is not in the contract and not available from other sources.
   */
  decimal: string | null;
};

/**
 * Represents a transfer event that is returned in a {@link AssetTransfersResponse}.
 *
 * @public
 */
type AssetTransfersResult = {
  /** The unique ID of the transfer. */
  uniqueId: string;

  /** The category of the transfer. */
  category: AssetTransferCategory;

  /** The block number where the transfer occurred. */
  blockNum: Hex;

  /** The from address of the transfer. */
  from: Hex;

  /** The to address of the transfer. */
  to: Hex | null;

  /**
   * Converted asset transfer value as a number (raw value divided by contract
   * decimal). `null` if ERC721 transfer or contract decimal not available.
   */
  value: number | null;

  /**
   * The raw ERC721 token id of the transfer as a hex string. `null` if not an
   * ERC721 transfer.
   */
  erc721TokenId: string | null;

  /**
   * A list of ERC1155 metadata objects if the asset transferred is an ERC1155
   * token. `null` if not an ERC1155 transfer.
   */
  erc1155Metadata: ERC1155Metadata[] | null;

  /** The token id of the token transferred. */
  tokenId: string | null;

  /**
   * Returns the token's symbol or ETH for other transfers. `null` if the
   * information was not available.
   */
  asset: string | null;

  /** The transaction hash of the transfer transaction. */
  hash: Hex;

  /** Information about the raw contract of the asset transferred. */
  rawContract: RawContract;
};

export type GetAssetTransfersReturnType = {
  transfers: AssetTransfersResult[];
  /** Page key for the next page of results, if one exists. */
  pageKey?: string;
};

export async function getAssetTransfers<
  TChain extends Chain | undefined,
  TAccount extends Account | undefined
  // TSchema extends RpcSchema | undefined
>(
  client: PublicClient<
    Transport,
    TChain,
    TAccount,
    [...PublicRpcSchema, ...AlchemyRpcSchema]
  >,
  args: GetAssetTransfersParameters
): Promise<GetAssetTransfersReturnType> {
  return client.request({
    method: "alchemy_getAssetTransfers",
    params: args,
  });
}
