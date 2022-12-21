import { TExtractionFunction } from './extraction-function.types';
import { TLookup } from './lookup.type';

type TDimensionOutputType = 'STRING' | 'LONG' | 'FLOAT';

export type TDefaultDimensionSpec<T> = {
  type: 'default';
  dimension: keyof T;
  outputName?: string;
  outputType?: TDimensionOutputType;
};

export type TExtractionDimensionSpec<T> = {
  type: 'extraction';
  dimension: keyof T;
  extractionFn: TExtractionFunction;
  outputName?: string;
  outputType?: TDimensionOutputType;
};

export type TListFilteredDimensionSpecs<T> = {
  type: 'listFiltered';
  delegate: TDimensionSpec<T>;
  values: T[keyof T][];
  isWhitelist?: boolean;
};

export type TRegexFilteredDimensionSpecs<T> = {
  type: 'regexFiltered';
  delegate: TDimensionSpec<T>;
  pattern: string;
};

export type TPrefixFilteredDimensionSpecs<T> = {
  type: 'prefixFiltered';
  delegate: TDimensionSpec<T>;
  prefix: string;
};

export type TLookupDimensionSpecs<T> = {
  type: 'lookup';
  dimension: keyof T;
  outputName: string;
  outputType?: TDimensionOutputType;
  lookup: TLookup;
  replaceMissingValueWith?: string;
  retainMissingValue?: boolean;
  name?: string;
  optimize?: boolean;
};

export type TDimensionSpec<T> =
  | TDefaultDimensionSpec<T>
  | TExtractionDimensionSpec<T>
  | TListFilteredDimensionSpecs<T>
  | TRegexFilteredDimensionSpecs<T>
  | TPrefixFilteredDimensionSpecs<T>
  | TLookupDimensionSpecs<T>;
