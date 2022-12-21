import { IQueryContext } from '../../query-context.interface';
import { TDirection } from '../../query-util.types';
import { TDataSource } from '../query-components/datasource.types';
import { TFilter } from '../query-components/filter.types';

export type TScanQueryResultFormat = 'compactedList' | 'list';

export interface IScanQuery<T> {
  queryType: 'scan';
  dataSource: TDataSource;
  intervals: string[];
  resultFormat?: TScanQueryResultFormat;
  filter?: TFilter<T>;
  columns?: Array<keyof T>;
  batchSize?: number;
  limit?: number;
  offset?: number;
  order?: TDirection;
  legacy?: boolean;
  context?: IQueryContext;
}
