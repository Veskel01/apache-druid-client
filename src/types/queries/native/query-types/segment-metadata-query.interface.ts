import { IQueryContext } from '../../query-context.interface';
import { TDataSource } from '../query-components/datasource.types';

export type TSegmentMetadataToInclude<T> =
  | {
      type: 'all';
    }
  | {
      type: 'none';
    }
  | {
      type: 'list';
      columns: Array<keyof T>;
    };

export type TAnalysisType =
  | 'cardinality'
  | 'minmax'
  | 'size'
  | 'interval'
  | 'timestampSpec'
  | 'queryGranularity'
  | 'aggregators'
  | 'rollup';

export interface ISegmentMetadataQuery<T> {
  queryType: 'segmentMetadata';
  dataSource: TDataSource;
  intervals?: string[];
  toInclude?: TSegmentMetadataToInclude<T>;
  merge?: boolean;
  context?: IQueryContext;
  analysisTypes?: TAnalysisType[];
  lenientAggregatorMerge?: boolean;
}
