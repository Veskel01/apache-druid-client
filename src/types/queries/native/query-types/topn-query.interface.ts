import { IQueryContext } from '../../query-context.interface';
import { TSort } from '../../query-util.types';
import { TDimensionSpec } from '../query-components/dimension-spec.types';
import { IAggregatableQuery } from './base-aggregation-query.interface';

type TDimensionTopNMetricSpec = {
  type: 'dimension';
  ordering?: TSort;
  previousStop?: string;
};

type TInvertedTopNMetricSpec = {
  type: 'inverted';
  metric: TTopNMetricSpec;
};

export type TTopNMetricSpec = string | TDimensionTopNMetricSpec | TInvertedTopNMetricSpec;

export interface ITopNQuery<T> extends IAggregatableQuery<T> {
  queryType: 'topN';
  dimension: string | TDimensionSpec<T>;
  threshold: number;
  metric: TTopNMetricSpec;
  context?: IQueryContext;
}
