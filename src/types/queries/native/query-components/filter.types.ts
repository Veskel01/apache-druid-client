import { TDimensionSpec } from './dimension-spec.types';
import { TExtractionFunction } from './extraction-function.types';
import { TSearchQuerySpec } from './search-query-spec.type';
import { TStringComparator } from './string-comparator.type';

export type TSelectorFilter<T> = {
  type: 'selector';
  dimension: keyof T;
  value: T[keyof T];
  extractionFn?: TExtractionFunction;
};

export type TColumnComparisonFilter<T> = {
  type: 'columnComparison';
  dimensions: [TDimensionSpec<T>, TDimensionSpec<T>] | [keyof T, keyof T];
  extractionFn?: TExtractionFunction;
};

export type TRegexFilter<T> = {
  type: 'regex';
  dimension: keyof T;
  pattern: string;
  extractionFn?: TExtractionFunction;
};

export type TAndFilter<T> = {
  type: 'and';
  fields: Array<TFilter<T>>;
  extractionFn?: TExtractionFunction;
};

export type TOrFilter<T> = {
  type: 'or';
  fields: Array<TFilter<T>>;
  extractionFn?: TExtractionFunction;
};

export type TNotFilter<T> = {
  type: 'not';
  field: TFilter<T>;
  extractionFn?: TExtractionFunction;
};

// TODO = parse function to string / rename func to function
export type TJavaScriptFilter<T> = {
  type: 'javascript';
  dimension: keyof T;
  function: string;
  extractionFn?: TExtractionFunction;
};

export type TExtractionFilter<T> = {
  type: 'extraction';
  dimension: keyof T;
  value: T[keyof T];
  extractionFn?: TExtractionFunction;
};

export type TSearchFilter<T> = {
  type: 'search';
  dimension: keyof T;
  query: TSearchQuerySpec;
  extractionFn?: TExtractionFunction;
};

export type TInFilter<T> = {
  type: 'in';
  dimension: keyof T;
  values: T[keyof T][];
  extractionFn?: TExtractionFunction;
};

export type TLikeFilter<T> = {
  type: 'like';
  dimension: keyof T;
  pattern: string;
  escape?: string;
  extractionFn?: TExtractionFunction;
};

export type TBoundFilter<T> = {
  type: 'bound';
  dimension: keyof T;
  lower?: string;
  upper?: string;
  lowerStrict?: boolean;
  upperStrict?: boolean;
  ordering?: TStringComparator;
  extractionFn?: TExtractionFunction;
};

export type TIntervalFilter<T> = {
  type: 'interval';
  dimension: keyof T;
  intervals: string[];
  extractionFn?: TExtractionFunction;
};

export type TTrueFilter = {
  type: 'true';
  extractionFn?: TExtractionFunction;
};

export type TExpressionFilter = {
  type: 'expression';
  expression: string;
  extractionFn?: TExtractionFunction;
};

export type TSpatialFilter = {
  type: 'spatial';
  dimension: string;
  bound?:
    | {
        type: 'rectangular';
        minCoords: number[];
        maxCoords: number[];
      }
    | {
        type: 'radius';
        coords: number[];
        radius: number;
      }
    | {
        type: 'polygon';
        abscissa: number[];
        ordinate: number[];
      };
};

export type TFilter<T> =
  | TSelectorFilter<T>
  | TColumnComparisonFilter<T>
  | TRegexFilter<T>
  | TAndFilter<T>
  | TOrFilter<T>
  | TNotFilter<T>
  | TJavaScriptFilter<T>
  | TExtractionFilter<T>
  | TSearchFilter<T>
  | TInFilter<T>
  | TLikeFilter<T>
  | TBoundFilter<T>
  | TIntervalFilter<T>
  | TSpatialFilter
  | TTrueFilter
  | TExpressionFilter;
