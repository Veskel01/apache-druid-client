import {
  IAggregatableQuery,
  TAggregation,
  TNativeQuery,
  TPostAggregation,
  TVirtualColumn
} from '../../../types';
import { AbstractTimeseriesQueryBuilder } from './timeseries-query-builder.abstract';

export abstract class AbstractAggregatableQueryBuilder<
  TDataRow,
  TNativeQueryType extends TNativeQuery<TDataRow> & IAggregatableQuery<TDataRow>
> extends AbstractTimeseriesQueryBuilder<TDataRow, TNativeQueryType> {
  public granularity(granularity: TNativeQueryType['granularity']): this {
    this.updateState({ granularity });
    return this;
  }

  public filter(filter: TNativeQueryType['filter']): this {
    this.updateState({ filter });
    return this;
  }

  public virtualColumns(value: TVirtualColumn<TDataRow>[] | TVirtualColumn<TDataRow>): this {
    const virtualColumns = this.mergeToArray(value);
    this.updateState({ virtualColumns });
    return this;
  }

  public aggregations(value: TAggregation<TDataRow>[] | TAggregation<TDataRow>): this {
    const aggregations = this.mergeToArray(value);
    this.updateState({ aggregations });
    return this;
  }

  public postAggregations(value: TPostAggregation[] | TPostAggregation): this {
    const postAggregations = this.mergeToArray(value);
    this.updateState({ postAggregations });
    return this;
  }
}
