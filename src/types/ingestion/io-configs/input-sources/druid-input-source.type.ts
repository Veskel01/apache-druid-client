import { TFilter } from '../../../queries/native/query-components/filter.types';

export type TDruidInputSource<TRow = Record<string, unknown>> = {
  type: 'druid';
  dataSource: string;
  interval: string;
  filter?: TFilter<TRow>;
};
