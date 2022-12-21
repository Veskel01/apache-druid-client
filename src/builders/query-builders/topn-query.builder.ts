import { ITopNQuery, TDimensionSpec, TQueryType, TTopNMetricSpec } from '../../types';
import { AbstractAggregatableQueryBuilder } from './abstract/aggregatable-query-builder.abstract';

export class TopNQueryBuilder<TDataRow> extends AbstractAggregatableQueryBuilder<
  TDataRow,
  ITopNQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'topN';
  }

  protected initDefaults(): Partial<Omit<ITopNQuery<TDataRow>, 'queryType'>> {
    return {
      intervals: []
    };
  }

  public dimension(dimension: TDimensionSpec<TDataRow>): this {
    this.updateState({ dimension });
    return this;
  }

  public threshold(threshold: number): this {
    this.updateState({ threshold });
    return this;
  }

  public metric(metric: TTopNMetricSpec): this {
    this.updateState({ metric });
    return this;
  }
}
