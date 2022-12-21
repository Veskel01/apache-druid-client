import { TAggregation } from '../queries/native/query-components/aggregation.types';
import { TFilter } from '../queries/native/query-components/filter.types';
import { TGranularity } from '../queries/native/query-components/granularity.type';
import { TDimensionSpecSchema, TSpatialSpec } from './shared-ingestion.types';
import { IHadoopTuningConfig } from './tuning-configs/hadoop-tuning-config.interface';
import { IKafkaTuningConfig } from './tuning-configs/kafka-tuning-config.interface';
import { IKinesisTuningConfig } from './tuning-configs/kinesis-supervisor-tuning-config.interface';
import { INativeBatchTuningConfig } from './tuning-configs/native-batch-tuning-config.interface';

type TMetricSpecSchema<TRow> = {
  type: TAggregation<TRow>['type'];
  name: string;
  fieldName?: string;
};

export interface IIngestionSpecSchema<TRow = Record<string, unknown>> {
  type: 'index_parallel' | 'index_hadoop' | 'kafka' | 'kinesis';
  spec: {
    dataSchema: {
      dataSource: string;
      timestampSpec?: {
        column?: string;
        format?: 'iso' | 'posix' | 'millis' | 'micro' | 'nano' | 'auto';
        missingValue?: string | null;
      };
      dimensionsSpec: {
        dimensions: TDimensionSpecSchema[];
        dimensionExclusions?: string[];
        spatialDimensions?: Array<TSpatialSpec>;
        includeAllDimensions?: boolean;
      };
      metricsSpec?: TMetricSpecSchema<TRow>[];
      granularitySpec?: {
        type?: 'uniform';
        segmentGranularity?: TGranularity;
        rollup?: boolean;
        intervals?: string[];
      };
      transformSpec?: {
        transforms?: Array<{
          type: 'expression';
          name: string;
          expression: string;
        }>;
        filter?: TFilter<TRow>;
      };
    };
    // TODO
    ioConfig: any;
    tuningConfig: INativeBatchTuningConfig | IKafkaTuningConfig | IHadoopTuningConfig | IKinesisTuningConfig;
  };
}
