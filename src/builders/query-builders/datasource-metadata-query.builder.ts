import { AbstractBaseNativeQueryBuilder } from './abstract/base-native-query-builder.abstract';
import { IDataSourceMetadataQuery, TQueryType } from '../../types';

export class DataSourceMetadataQueryBuilder extends AbstractBaseNativeQueryBuilder<
  never,
  IDataSourceMetadataQuery
> {
  protected getQueryType(): TQueryType {
    return 'dataSourceMetadata';
  }

  protected initDefaults(): Partial<Omit<IDataSourceMetadataQuery, 'queryType'>> {
    return {};
  }
}
