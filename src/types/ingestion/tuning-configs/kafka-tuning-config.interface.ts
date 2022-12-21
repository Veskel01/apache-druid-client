import { IBaseTuningConfig } from './base-tuning-config.interface';

export interface IKafkaTuningConfig extends IBaseTuningConfig {
  type: 'kafka';
  maxRowsPerSegment?: number;
  maxTotalRows?: number;
  intermediatePersistPeriod?: string;
  maxPendingPersists?: number;
  reportParseExceptions?: boolean;
  handoffConditionTimeout?: number;
  resetOffsetAutomatically?: boolean;
  workerThreads?: number;
  chatThreads?: number;
  chatRetries?: number;
  httpTimeout?: string;
  shutdownTimeout?: string;
  offsetFetchPeriod?: string;
  segmentWriteOutMediumFactory?: Record<string, unknown>;
  intermediateHandoffPeriod?: string;
  logParseExceptions?: boolean;
  maxParseExceptions?: number;
  maxSavedParseExceptions?: number;
}
