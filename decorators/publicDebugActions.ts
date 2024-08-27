import { Client } from "viem";
import {
  traceBlock,
  type TraceBlockParameters,
  type TraceBlockReturnType,
} from "../actions/debug/traceBlock";

export type DebugActions = {
  traceBlock: (args: TraceBlockParameters) => Promise<TraceBlockReturnType>;
};

export const debugActions = (client: Client): DebugActions => ({
  traceBlock: (args) => traceBlock(client, args),
});
