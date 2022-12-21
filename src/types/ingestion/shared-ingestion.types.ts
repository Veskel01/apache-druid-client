export type TDimensionSpecSchema =
  | string
  | {
      type?: 'string' | 'long' | 'float' | 'double' | 'json';
      name: string;
      createBitmapIndex?: boolean;
      multiValueHandling?: 'sorted_array' | 'sorted_set' | 'array';
    };

export type TSpatialSpec = {
  dimName: string;
  dims?: string[];
};

// TODO: add more types
export type TIoConfigInputFormat =
  | 'csv'
  | 'delimited'
  | 'json'
  | 'kafka'
  | 'avro_stream'
  | 'avro_ocf'
  | 'protobuf';

export interface IAutoScalerConfig {
  enableTaskAutoScaler?: boolean;
  taskCountMax: number;
  taskCountMin: number;
  minTriggerScaleActionFrequencyMillis?: number;
  autoScalerStrategy?: 'lagBased';
  lagCollectionIntervalMillis?: number;
  lagCollectionRangeMillis?: number;
  scaleOutThreshold?: number;
  triggerScaleOutFractionThreshold?: number;
  scaleInThreshold?: number;
  triggerScaleInFractionThreshold?: number;
  scaleActionStartDelayMillis?: number;
  scaleActionPeriodMillis?: number;
  scaleInStep?: number;
  scaleOutStep?: number;
}
