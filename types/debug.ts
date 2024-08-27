import {
  type TraceBlockByHashParameters,
  type TraceBlockByNumberParameters,
  type TraceBlockByRlpParameters,
} from "../actions/debug/traceBlock";

import {
  type TraceCallParameters,
  type TraceCallReturnType,
} from "../actions/debug/traceCall";

export type DebugRpcSchema = [
  {
    Method: "debug_traceBlock";
    Parameters: TraceBlockByRlpParameters;
    ReturnType: string;
  },
  {
    Method: "debug_traceBlockByNumber";
    Parameters: TraceBlockByNumberParameters;
    ReturnType: string;
  },
  {
    Method: "debug_traceBlockByHash";
    Parameters: TraceBlockByHashParameters;
    ReturnType: string;
  },
  {
    Method: "debug_traceCall";
    Parameters: TraceCallParameters;
    ReturnType: TraceCallReturnType;
  }
];
