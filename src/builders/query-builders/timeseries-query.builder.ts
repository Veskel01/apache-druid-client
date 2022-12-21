import { ITimeSeriesContext, ITimeSeriesQuery, TQueryType } from '../../types';
import { AbstractAggregatableQueryBuilder } from './abstract/aggregatable-query-builder.abstract';

export class TimeseriesQueryBuilder<TDataRow> extends AbstractAggregatableQueryBuilder<
  TDataRow,
  ITimeSeriesQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'timeseries';
  }

  protected initDefaults(): Partial<Omit<ITimeSeriesQuery<TDataRow>, 'queryType'>> {
    return {
      intervals: [],
      descending: false,
      limit: Infinity
    };
  }

  public isDescending(descending: boolean): this {
    this.updateState({ descending });
    return this;
  }

  public limit(limit: number): this {
    this.updateState({ limit });
    return this;
  }

  public override context(context: ITimeSeriesContext): this {
    this.updateState({ context });
    return this;
  }
}
