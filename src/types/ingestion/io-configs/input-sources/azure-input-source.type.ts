import { TInputSourceBucket } from './shared-input-source.types';

export type TAzureInputSource = {
  type: 'azure';
  uris?: string[];
  prefixes?: string[];
  objects?: Array<TInputSourceBucket>;
};
