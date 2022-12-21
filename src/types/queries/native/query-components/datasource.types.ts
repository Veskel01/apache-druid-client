import { TNativeQuery } from '../query-types/native-query.type';

export type TAllowedDataSourceType = 'table' | 'inline' | 'lookup' | 'query' | 'join' | 'union';

type TTableDataSource = {
  type: 'table';
  name: string;
};

type TLookupDataSource = {
  type: 'lookup';
  lookup: string;
};

type TUnionDataSource = {
  type: 'union';
  dataSources: string[];
};

type TInlineDataSource = {
  type: 'inline';
  columnNames: string[];
  rows: string[][];
};

// TODO - query keys TNativeQuery
type TQueryDataSource = {
  type: 'query';
};

type TJoinDataSource = {
  type: 'join';
  left:
    | string
    | TTableDataSource
    | TJoinDataSource
    | TLookupDataSource
    | TQueryDataSource
    | TInlineDataSource;
  right: TLookupDataSource | TQueryDataSource | TInlineDataSource;
  rightPrefix: string;
  condition: string;
  joinType: 'INNER' | 'LEFT';
};

export type TDataSource =
  | string
  | TTableDataSource
  | TLookupDataSource
  | TUnionDataSource
  | TInlineDataSource
  | TQueryDataSource
  | TJoinDataSource;
