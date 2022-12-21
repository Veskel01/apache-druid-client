export interface IQueryContext {
  timeout?: number;
  priority?: number;
  lane?: number;
  queryId?: string;
  brokerService?: string;
  useCache?: boolean;
  populateCache?: boolean;
  useResultLevelCache?: boolean;
  populateResultLevelCache?: boolean;
  bySegment?: boolean;
  finalize?: boolean;
  maxScatterGatherBytes?: number;
  maxQueuedBytes?: number;
  serializeDateTimeAsLong?: boolean;
  serializeDateTimeAsLongInner?: boolean;
  enableParallelMerge?: boolean;
  parallelMergeParallelism?: number;
  parallelMergeInitialYieldRows?: number;
  parallelMergeSmallBatchRows?: number;
  useFilterCNF?: boolean;
  secondaryPartitionPruning?: boolean;
  enableJoinLeftTableScanDirect?: boolean;
  debug?: boolean;
  setProcessingThreadNames?: boolean;
  maxNumericInFilters?: number;
  inSubQueryThreshold?: number;
}
