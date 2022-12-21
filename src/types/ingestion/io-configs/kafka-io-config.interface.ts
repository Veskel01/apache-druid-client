import { IAutoScalerConfig, TIoConfigInputFormat } from '../shared-ingestion.types';

// TODO
interface IKafkaInputFormat {
  type: 'kafka';
  headerLabelPrefix?: string;
  timestampColumnName?: string;
  keyColumnName?: string;
  // headerFormat?: {};
}

export interface IKafkaIoConfig {
  topic: string;
  inputFormat: TIoConfigInputFormat;
  consumerProperties: Record<string, unknown>;
  pollTimeout?: number;
  replicas?: number;
  taskCount?: number;
  taskDuration?: string;
  startDelay?: string;
  period?: string;
  useEarliestOffset?: boolean;
  completionTimeout?: string;
  lateMessageRRejectionStartDateTime?: string;
  lateMessageRejectionPeriod?: string;
  earlyMessageRejectionPeriod?: string;
  autoScalerConfig?: IAutoScalerConfig;
}
