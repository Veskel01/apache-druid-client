import { IQueryContext } from '../../query-context.interface';
import { TSort } from '../../query-util.types';
import { TDataSource } from '../query-components/datasource.types';
import { TFilter } from '../query-components/filter.types';
import { TGranularity } from '../query-components/granularity.type';
import { TSearchQuerySpec } from '../query-components/search-query-spec.type';
import { TVirtualColumn } from '../query-components/virtual-column.types';

export interface ISearchQuery<T> {
  queryType: 'search';
  dataSource: TDataSource;
  query: TSearchQuerySpec;
  granularity?: TGranularity;
  filter?: TFilter<T>;
  limit?: number;
  intervals: string[];
  searchDimensions?: Array<keyof T>;
  virtualColumns?: TVirtualColumn<T>[];
  sort?: TSort;
  context?: IQueryContext;
}
