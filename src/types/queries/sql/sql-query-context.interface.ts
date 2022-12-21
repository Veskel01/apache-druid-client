export interface ISqlQueryContext {
  readonly sqlQueryId?: string;
  readonly sqlTimeZone?: string;
  readonly sqlStringifyArrays?: boolean;
  readonly useApproximateCountDistinct?: boolean;
  readonly useGroupingSetForExactDistinct?: boolean;
  readonly useApproximateTopN?: boolean;
  readonly enableTimeBoundaryPlanning?: boolean;
  readonly useNativeQueryExplain?: boolean;
  readonly sqlQueryLimit?: number;
}
