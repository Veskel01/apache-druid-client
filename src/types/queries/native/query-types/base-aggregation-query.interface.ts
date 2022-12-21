import { TAggregation } from '../query-components/aggregation.types';
import { TDataSource } from '../query-components/datasource.types';
import { TFilter } from '../query-components/filter.types';
import { TGranularity } from '../query-components/granularity.type';
import { TPostAggregation } from '../query-components/post-aggregation.types';
import { TVirtualColumn } from '../query-components/virtual-column.types';

export interface IAggregatableQuery<T> {
  dataSource: TDataSource;
  intervals: string[];
  granularity: TGranularity;
  filter?: TFilter<T>;
  virtualColumns?: TVirtualColumn<T>[];
  aggregations?: TAggregation<T>[];
  postAggregations?: TPostAggregation[];
}
