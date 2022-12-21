import { IQueryContext } from '../../query-context.interface';
import { IAggregatableQuery } from './base-aggregation-query.interface';

export interface ITimeSeriesContext extends IQueryContext {
  grandTotal?: boolean;
  skipEmptyBuckets?: boolean;
}

export interface ITimeSeriesQuery<T> extends IAggregatableQuery<T> {
  queryType: 'timeseries';
  descending?: boolean;
  limit?: number;
  context?: ITimeSeriesContext;
}
