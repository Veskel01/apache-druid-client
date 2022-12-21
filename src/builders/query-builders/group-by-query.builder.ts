import { IGroupByLimitSpec, IGroupByQuery, THavingGroupByFilters, TQueryType } from '../../types';
import { AbstractAggregatableQueryBuilder } from './abstract/aggregatable-query-builder.abstract';

export class GroupByQueryBuilder<TDataRow> extends AbstractAggregatableQueryBuilder<
  TDataRow,
  IGroupByQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'groupBy';
  }

  protected initDefaults(): Partial<Omit<IGroupByQuery<TDataRow>, 'queryType'>> {
    return {
      dimensions: [],
      granularity: 'all',
      intervals: []
    };
  }

  public dimensions(dimensions: IGroupByQuery<TDataRow>['dimensions']): this {
    this.updateState({ dimensions });
    return this;
  }

  public limitSpec(limitSpec: IGroupByLimitSpec<TDataRow>): this {
    this.updateState({ limitSpec });
    return this;
  }

  public having(having: THavingGroupByFilters<TDataRow>): this {
    this.updateState({ having });
    return this;
  }

  public subtotalSpec(subtotalSpec: string[][]): this {
    this.updateState({ subtotalSpec });
    return this;
  }
}
