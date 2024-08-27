import {
  TraceBlockByHashParameters,
  TraceBlockByNumberParameters,
  TraceBlockByRlpParameters,
} from "../actions/debug/traceBlock";

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
  }
];
