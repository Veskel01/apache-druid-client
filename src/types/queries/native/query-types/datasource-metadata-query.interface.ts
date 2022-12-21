import { IQueryContext } from '../../query-context.interface';
import { TDataSource } from '../query-components/datasource.types';

export interface IDataSourceMetadataQuery {
  queryType: 'dataSourceMetadata';
  dataSource: TDataSource;
  context?: IQueryContext;
}
