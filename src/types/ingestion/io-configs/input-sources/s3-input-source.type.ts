import { TInputSourceBucket } from './shared-input-source.types';

export type TS3InputSource = {
  type: 's3';
  prefixes?: string[];
  uris?: string[];
  objects?: Array<TInputSourceBucket>;
  endpointConfig?: {
    url?: string;
    signingRegion?: string;
  };
  clientConfig?: {
    protocol?: 'http' | 'https';
    disableChunkedEncoding?: boolean;
    enablePathStyleAccess?: boolean;
    forceGlobalBucketAccess?: boolean;
  };
  properties?: {
    accessKeyId?: string;
    secretAccessKey?: string;
    assumeRoleArn?: string;
    assumeRoleExternalId?: string;
  };
  proxyConfig?: {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
  };
};
