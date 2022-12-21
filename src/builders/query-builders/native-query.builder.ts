import { DataSourceMetadataQueryBuilder } from './datasource-metadata-query.builder';
import { GroupByQueryBuilder } from './group-by-query.builder';
import { ScanQueryBuilder } from './scan-query.builder';
import { SearchQueryBuilder } from './search-query.builder';
import { SegmentMetadataQueryBuilder } from './segment-metadata-query.builder';
import { TimeBoundaryQueryBuilder } from './time-boundary-query.builder';
import { TimeseriesQueryBuilder } from './timeseries-query.builder';
import { TopNQueryBuilder } from './topn-query.builder';

export class NativeQueryBuilder {
  private constructor() {}

  public static datasourceMetadata(): DataSourceMetadataQueryBuilder {
    return new DataSourceMetadataQueryBuilder();
  }

  public static groupBy<TDataRow>(): GroupByQueryBuilder<TDataRow> {
    return new GroupByQueryBuilder<TDataRow>();
  }

  public static scan<TDataRow>(): ScanQueryBuilder<TDataRow> {
    return new ScanQueryBuilder<TDataRow>();
  }

  public static search<TDataRow>(): SearchQueryBuilder<TDataRow> {
    return new SearchQueryBuilder<TDataRow>();
  }

  public static segmentMetadata<TDataRow>(): SegmentMetadataQueryBuilder<TDataRow> {
    return new SegmentMetadataQueryBuilder<TDataRow>();
  }

  public static timeBoundary<TDataRow>(): TimeBoundaryQueryBuilder<TDataRow> {
    return new TimeBoundaryQueryBuilder<TDataRow>();
  }

  public static timeseries<TDataRow>(): TimeseriesQueryBuilder<TDataRow> {
    return new TimeseriesQueryBuilder<TDataRow>();
  }

  public static topN<TDataRow>(): TopNQueryBuilder<TDataRow> {
    return new TopNQueryBuilder<TDataRow>();
  }
}
