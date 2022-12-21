import { TInputSourceBucket } from './shared-input-source.types';

export type TGCPInputSourceType = {
  type: 'google';
  uris?: string[];
  prefixes?: string[];
  objects?: Array<TInputSourceBucket>;
};
