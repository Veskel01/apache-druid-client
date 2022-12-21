import { IBaseTuningConfig } from './base-tuning-config.interface';

export interface IKinesisTuningConfig extends IBaseTuningConfig {
  type: 'kinesis';
  maxRowsPerSegment?: number;
  maxTotalRows?: number;
  intermediatePersistPeriod?: string;
  maxPendingPersists?: number;
  reportParseExceptions?: boolean;
  handoffConditionTimeout?: number;
  resetOffsetAutomatically?: boolean;
  skipSequenceNumberAvailabilityCheck?: boolean;
  workerThreads?: number;
  chatThreads?: number;
  chatRetries?: number;
  httpTimeout?: string;
  shutdownTimeout?: string;
  recordBufferSize?: number;
  recordBufferOfferTimeout?: number;
  recordBufferFullWait?: number;
  fetchThreads?: number;
  segmentWriteOutMediumFactory?: Record<string, unknown>;
  intermediateHandoffPeriod?: string;
  logParseExceptions?: boolean;
  maxParseExceptions?: number;
  maxRecordsPerPoll?: number;
  repartitionTransitionDuration?: string;
  offsetFetchPeriod?: string;
  useListShards: boolean;
}
