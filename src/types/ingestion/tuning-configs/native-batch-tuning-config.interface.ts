import { IBaseTuningConfig } from './base-tuning-config.interface';

export interface INativeBatchTuningConfig extends IBaseTuningConfig {
  type: 'index_parallel';
  maxColumnsToMerge?: number;
  maxTotalRows?: number;
  numShards?: number;
  splitHintSpec?:
    | {
        type: 'maxSize';
        maxSplitSize?: number;
        maxNumFiles?: number;
      }
    | {
        type: 'segments';
        maxInputSegmentBytesPerTask?: number;
        maxNumSegments?: number;
      };
  // TODO
  partitionSpec?: {};
  maxPendingPersists?: number;
  forceGuaranteedRollup?: boolean;
  reportParseExceptions?: boolean;
  pushTimeout?: number;
  segmentWriteOutMediumFactory?: Record<string, unknown>;
  maxNumConcurrentSubTasks?: number;
  maxRetry?: number;
  maxNumSegmentsToMerge?: number;
  totalNumMergeTasks?: number;
  taskStatusCheckPeriodMs?: number;
  chatHandlerTimeout?: number;
  chatHandlerNumRetries?: number;
  awaitSegmentAvailabilityTimeoutMs?: number;
}
