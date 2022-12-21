import { IQueryContext } from '../../query-context.interface';
import { TSort } from '../../query-util.types';
import { TDimensionSpec } from '../query-components/dimension-spec.types';
import { THavingGroupByFilters } from '../query-components/having-filter.types';
import { IAggregatableQuery } from './base-aggregation-query.interface';

export interface ILimitSpecColumn<T> {
  dimension: keyof T;
  direction: 'ascending' | 'descending';
  dimensionOrder: TSort;
}

export interface IGroupByLimitSpec<T> {
  type: 'default';
  limit?: number;
  offset?: number;
  columns?: ILimitSpecColumn<T>[] | Array<keyof T>;
}

export interface IGroupByQuery<T> extends IAggregatableQuery<T> {
  queryType: 'groupBy';
  dimensions: TDimensionSpec<T>[] | Array<keyof T>;
  limitSpec?: IGroupByLimitSpec<T>;
  having?: THavingGroupByFilters<T>;
  subtotalSpec?: string[][];
  context?: IQueryContext;
}
