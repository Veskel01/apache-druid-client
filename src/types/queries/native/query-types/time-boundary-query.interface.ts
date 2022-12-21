import { IQueryContext } from '../../query-context.interface';
import { TDataSource } from '../query-components/datasource.types';
import { TFilter } from '../query-components/filter.types';

export interface ITimeBoundaryQuery<T> {
  queryType: 'timeBoundary';
  dataSource: TDataSource;
  bound?: 'maxTime' | 'minTime';
  filter?: TFilter<T>;
  context?: IQueryContext;
}
