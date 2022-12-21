import { TGranularity } from './granularity.type';
import { TLookup } from './lookup.type';
import { TSearchQuerySpec } from './search-query-spec.type';

export type TRegexExtractionFunction = {
  type: 'regex';
  expr: string;
  index?: number;
  replaceMissingValue?: boolean;
  replaceMissingValueWith?: string;
};

export type TPartialExtractionFunction = {
  type: 'partial';
  expr: string;
};

export type TSearchQueryExtractionFunction = {
  type: 'searchQuery';
  query: TSearchQuerySpec;
};

export type TSubstringExtractionFunction = {
  type: 'substring';
  index: number;
  length?: number;
};

export type TStrlenExtractionFunction = {
  type: 'strlen';
};

export type TTimeFormatExtractionFunction = {
  type: 'timeFormat';
  format?: string;
  timeZone?: string;
  locale?: string;
  granularity?: TGranularity;
  asMillis?: boolean;
};

export type TTimeParsingExtractionFunction = {
  type: 'time';
  timeFormat: string;
  resultFormat: string;
  joda?: boolean;
};

// TODO = parse function to string / rename func to function
export type TJavascriptExtractionFunction = {
  type: 'javascript';
  function: string;
  injective?: boolean;
};

export type TRegisteredLookupExtractionFunction = {
  type: 'registeredLookup';
  lookup: string;
  retainMissingValue?: boolean;
  replaceMissingValueWith?: string;
  injective?: boolean;
  optimize?: boolean;
};

export type TLookupExtractionFunction = {
  type: 'lookup';
  lookup: TLookup;
  retainMissingValue?: boolean;
  injective?: boolean;
  replaceMissingValueWith?: string;
};

export type TCascadeExtractionFunction = {
  type: 'cascade';
  extractionFns: Array<TExtractionFunction>;
};

export type TStringFormatExtractionFunction = {
  type: 'stringFormat';
  format: string;
  nullHandling?: 'nullString' | 'emptyString' | 'returnNull';
};

export type TUpperExtractionFunction = {
  type: 'upper';
  locale?: string;
};

export type TLowerExtractionFunction = {
  type: 'lower';
};

export type TBucketExtractionFunction = {
  type: 'bucket';
  size?: number;
  offset?: number;
};

export type TExtractionFunction =
  | TRegexExtractionFunction
  | TPartialExtractionFunction
  | TSearchQueryExtractionFunction
  | TSubstringExtractionFunction
  | TStrlenExtractionFunction
  | TTimeFormatExtractionFunction
  | TTimeParsingExtractionFunction
  | TJavascriptExtractionFunction
  | TRegisteredLookupExtractionFunction
  | TLookupExtractionFunction
  | TCascadeExtractionFunction
  | TStringFormatExtractionFunction
  | TUpperExtractionFunction
  | TLowerExtractionFunction
  | TBucketExtractionFunction;
