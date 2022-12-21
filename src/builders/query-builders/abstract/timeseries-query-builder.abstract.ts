import { TNativeQuery } from '../../../types';
import { AbstractBaseNativeQueryBuilder } from './base-native-query-builder.abstract';

export interface IInterval {
  from: string | Date;
  to: string | Date;
}

export abstract class AbstractTimeseriesQueryBuilder<
  TDataRow,
  TNativeQueryType extends TNativeQuery<TDataRow>
> extends AbstractBaseNativeQueryBuilder<TDataRow, TNativeQueryType> {
  public intervals(input: IInterval[] | string[] | string): this {
    const parseToString = (date: string | Date): string => {
      if (typeof date === 'string') {
        return date;
      }
      return date.toISOString();
    };

    const inputArr = Array.isArray(input) ? input : [input];

    const intervals = inputArr.map((val) => {
      if (typeof val === 'string') {
        return val;
      }
      return `${parseToString(val.from)}/${parseToString(val.to)}`;
    });
    this.updateState({ intervals });
    return this;
  }
}
