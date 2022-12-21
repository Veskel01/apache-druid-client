import { TFilter } from './filter.types';

export type THavingFilter<T> = {
  type: 'filter';
  filter: TFilter<T>;
};

export type THavingToNumeric = {
  type: 'greaterThan' | 'equalTo' | 'greaterThan' | 'lessThan';
  aggregation: string;
  value: number;
};

export type THavingDimensionSelector<T> = {
  type: 'dimSelector';
  dimension: keyof T;
  value: T[keyof T];
};

type THavingSpecs<T> = THavingFilter<T> | THavingToNumeric | THavingDimensionSelector<T>;

export type THavingLogicalExpr<T> = {
  type: 'and' | 'or' | 'not';
  havingSpecs: THavingSpecs<T>[];
};

export type THavingGroupByFilters<T> = THavingSpecs<T> | THavingLogicalExpr<T>;
