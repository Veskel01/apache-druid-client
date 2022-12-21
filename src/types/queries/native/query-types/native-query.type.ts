import { IDataSourceMetadataQuery } from './datasource-metadata-query.interface';
import { IGroupByQuery } from './group-by-query.interface';
import { IScanQuery } from './scan-query.interface';
import { ISearchQuery } from './search-query.interface';
import { ISegmentMetadataQuery } from './segment-metadata-query.interface';
import { ITimeBoundaryQuery } from './time-boundary-query.interface';
import { ITimeSeriesQuery } from './timeseries-query.interface';
import { ITopNQuery } from './topn-query.interface';

export type TNativeQuery<T> =
  | IDataSourceMetadataQuery
  | IGroupByQuery<T>
  | IScanQuery<T>
  | ISearchQuery<T>
  | ISegmentMetadataQuery<T>
  | ITimeBoundaryQuery<T>
  | ITimeSeriesQuery<T>
  | ITopNQuery<T>;
