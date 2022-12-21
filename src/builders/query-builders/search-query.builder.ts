import { ISearchQuery, TFilter, TGranularity, TQueryType, TSearchQuerySpec, TSort } from '../../types';
import { AbstractTimeseriesQueryBuilder } from './abstract/timeseries-query-builder.abstract';

export class SearchQueryBuilder<TDataRow> extends AbstractTimeseriesQueryBuilder<
  TDataRow,
  ISearchQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'search';
  }

  protected initDefaults(): Partial<Omit<ISearchQuery<TDataRow>, 'queryType'>> {
    return {
      granularity: 'all',
      limit: 1000,
      intervals: []
    };
  }

  public query(query: TSearchQuerySpec): this {
    this.updateState({ query });
    return this;
  }

  public granularity(granularity: TGranularity): this {
    this.updateState({ granularity });
    return this;
  }

  public filter(filter: TFilter<TDataRow>): this {
    this.updateState({ filter });
    return this;
  }

  public limit(limit: number): this {
    this.updateState({ limit });
    return this;
  }

  public searchDimensions(searchDimensions: Array<keyof TDataRow>): this {
    this.updateState({ searchDimensions });
    return this;
  }

  public sort(sort: TSort): this {
    this.updateState({ sort });
    return this;
  }
}
