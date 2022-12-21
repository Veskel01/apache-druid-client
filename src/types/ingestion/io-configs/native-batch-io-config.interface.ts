import { TIoConfigInputFormat } from '../shared-ingestion.types';
import { TAllInputSources } from './input-sources';

export interface INativeBatchIoConfig {
  type: 'index_parallel';
  inputSource?: TAllInputSources;
  inputFormat: TIoConfigInputFormat;
  appendToExisting?: boolean;
  dropExisting?: boolean;
}
