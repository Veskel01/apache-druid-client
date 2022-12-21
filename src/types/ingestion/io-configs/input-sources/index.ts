import { TAzureInputSource } from './azure-input-source.type';
import { TCombiningInputStore } from './combining-input-store.type';
import { TDruidInputSource } from './druid-input-source.type';
import { TGCPInputSourceType } from './gcp-input-source.type';
import { THDFSInputSource } from './hdfs-input-source.type';
import { THttpInputSource } from './http-input-source.type';
import { TInlineInputSource } from './inline-input-source.type';
import { TLocalInputSource } from './local-input-source.type';
import { TS3InputSource } from './s3-input-source.type';
import { TSqlInputSource } from './sql-input-source.type';

export type TInputSources =
  | TAzureInputSource
  | TDruidInputSource
  | TGCPInputSourceType
  | THDFSInputSource
  | THttpInputSource
  | TInlineInputSource
  | TLocalInputSource
  | TS3InputSource
  | TSqlInputSource;

export type TAllInputSources = TInputSources | TCombiningInputStore;
