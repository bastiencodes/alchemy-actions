import { Chain, Client, Hash, Hex, toHex, Transport } from "viem";
import { DebugRpcSchema } from "../../types/debug";

// TODO: can debug_traceBlockByNumber, debug_traceBlockByHash or debug_traceBlock be used with block tag (e.g. latest)?

type TraceConfig = {
  /** Name for built-in tracer or Javascript expression */
  tracer: string;

  /** Config for the specified tracer */
  tracerConfig?: string;

  /** Overrides the default timeout of 5 seconds for each transaction tracing */
  timeout: number;

  /** The number of blocks the tracer is willing to go back and re-execute to produce missing historical state necessary to run a specific trace */
  reexec: number;
};

export type TraceBlockByRlpParameters = [
  /** RLP of the block. */
  string,
  /** The Trace Config - specifies the options for this specific call */
  TraceConfig | {}
];

export type TraceBlockByNumberParameters = [
  /** The block number in hex. */
  Hex,
  /** The Trace Config - specifies the options for this specific call */
  TraceConfig | {}
];

export type TraceBlockByHashParameters = [
  /** Hash of the block. */
  Hash,
  /** The Trace Config - specifies the options for this specific call */
  TraceConfig | {}
];

export type TraceBlockParameters = (
  | {
      /** RLP of the block. */
      blockRlp?: string | undefined;
      blockHash?: undefined;
      blockNumber?: undefined;
    }
  | {
      blockRlp?: undefined;
      /** Hash of the block. */
      blockHash?: Hash | undefined;
      blockNumber?: undefined;
    }
  | {
      blockRlp?: undefined;
      blockHash?: undefined;
      /** The block number. */
      blockNumber?: bigint | undefined;
    }
) & {
  /** The Trace Config - specifies the options for this specific call */
  config?: {
    /** Name for built-in tracer or Javascript expression */
    tracer: string;

    /** Config for the specified tracer */
    tracerConfig?: string;

    /** Overrides the default timeout of 5 seconds for each transaction tracing */
    timeout: number;

    /** The number of blocks the tracer is willing to go back and re-execute to produce missing historical state necessary to run a specific trace */
    reexec: number;
  };
};

export type TraceBlockReturnType = string;

export async function traceBlock<
  TClient extends Client<Transport, Chain | undefined, any, DebugRpcSchema>
>(
  client: TClient,
  { blockRlp, blockHash, blockNumber }: TraceBlockParameters
): Promise<TraceBlockReturnType> {
  if (blockRlp) {
    return client.request({
      method: "debug_traceBlock",
      params: [blockRlp, {}],
    });
  } else if (blockHash) {
    return client.request({
      method: "debug_traceBlockByHash",
      params: [blockHash, {}],
    });
  } else if (blockNumber) {
    return client.request({
      method: "debug_traceBlockByNumber",
      params: [toHex(blockNumber), {}],
    });
  }

  throw new Error("Invalid parameters");
}
