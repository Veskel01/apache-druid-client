import { IBaseTuningConfig } from './base-tuning-config.interface';

type THadoopPartitionSpec =
  | {
      type: 'hashed';
      targetPartitionSize?: number;
      maxPartitionSize?: number;
      maxRowsPerSegment?: number;
      numShards?: number;
      partitionDimensions?: string[];
      partitionFunction?: 'murmur3_32_abs';
    }
  | {
      type: 'single_dim';
      targetRowsPerSegment: number;
      targetPartitionSize?: number;
      maxRowsPerSegment?: number;
      marPartitionSize?: number;
      partitionDimension?: string;
      assumeGrouped?: boolean;
    };

export interface IHadoopTuningConfig extends IBaseTuningConfig {
  type: 'hadoop';
  workingPath?: string;
  version?: string;
  partitionSpec?: THadoopPartitionSpec;
  leaveIntermediate?: boolean;
  cleanupOnFailure?: boolean;
  overwriteFiles?: boolean;
  ignoreInvalidRows?: boolean;
  combineText?: boolean;
  useCombiner?: boolean;
  jobProperties?: Record<string, unknown>;
  numBackgroundPersistThreads?: number;
  forceExtendableShardSpecs?: boolean;
  useExplicitVersion?: boolean;
  logParseExceptions?: boolean;
  maxParseExceptions?: number;
  useYarnRMJobStatusFallback?: boolean;
  awaitSegmentAvailabilityTimeoutMs?: number;
}
