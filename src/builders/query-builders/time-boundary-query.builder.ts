import { ITimeBoundaryQuery, TQueryType } from '../../types';
import { AbstractBaseNativeQueryBuilder } from './abstract/base-native-query-builder.abstract';

export class TimeBoundaryQueryBuilder<TDataRow> extends AbstractBaseNativeQueryBuilder<
  TDataRow,
  ITimeBoundaryQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'timeBoundary';
  }

  protected initDefaults(): Partial<Omit<ITimeBoundaryQuery<TDataRow>, 'queryType'>> {
    return {};
  }

  public bound(bound: 'maxTime' | 'minTime'): this {
    this.updateState({ bound });
    return this;
  }

  public filter(filter: ITimeBoundaryQuery<TDataRow>['filter']): this {
    this.updateState({ filter });
    return this;
  }
}
