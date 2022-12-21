import { IAutoScalerConfig, TIoConfigInputFormat } from '../shared-ingestion.types';

export interface IKinesisIoConfig {
  stream: string;
  inputFormat: TIoConfigInputFormat;
  endpoint?: string;
  replicas?: number;
  taskCount?: number;
  taskDuration?: string;
  startDelay?: string;
  period?: string;
  useEarliestSequenceNumber?: boolean;
  completionTimeout?: string;
  lateMessageRRejectionStartDateTime?: string;
  lateMessageRejectionPeriod?: string;
  earlyMessageRejectionPeriod?: string;
  recordsPerFetch?: number;
  fetchDelayMillis?: number;
  awsAssumedRoleArn?: string;
  awsExternalId?: string;
  deaggregate?: boolean;
  autoScalerConfig?: IAutoScalerConfig;
}
