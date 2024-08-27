import { Client } from "viem";

import {
  traceBlock,
  type TraceBlockParameters,
  type TraceBlockReturnType,
} from "../actions/debug/traceBlock";

import {
  traceCall,
  type TraceCallReturnType,
  type TraceCallParameters,
} from "../actions/debug/traceCall";

export type DebugActions = {
  traceBlock: (args: TraceBlockParameters) => Promise<TraceBlockReturnType>;
  traceCall: (args: TraceCallParameters) => Promise<TraceCallReturnType>;
};

export const debugActions = (client: Client): DebugActions => ({
  traceBlock: (args) => traceBlock(client, args),
  traceCall: (args) => traceCall(client, args),
});
