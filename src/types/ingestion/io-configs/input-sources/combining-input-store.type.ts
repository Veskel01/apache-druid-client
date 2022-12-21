import { TInputSources } from './index';

export type TCombiningInputStore = {
  type: 'combining';
  delegates: TInputSources[];
};
