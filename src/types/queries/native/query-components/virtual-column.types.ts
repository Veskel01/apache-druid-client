export type TVirtualColumnOutputType = 'STRING' | 'LONG' | 'DOUBLE' | 'FLOAT' | 'COMPLEX' | 'ARRAY';

export type TExpressionVirtualColumn = {
  type: 'expression';
  name: string;
  expression: string;
  outputType?: TVirtualColumnOutputType;
};

export type TNestedFieldVirtualColumn<T> = {
  type: 'nested-field';
  columnName: keyof T;
  outputName: string;
  expectedType?: TVirtualColumnOutputType;
  processFromRaw?: boolean;
  useJqSyntax?: boolean;
  path?: string;
  pathParts?: Array<
    | {
        type: 'field';
        field: string;
      }
    | {
        type: 'arrayElement';
        index: number;
      }
  >;
};

export type TListFilteredVirtualColumn<T> = {
  type: 'mv-filtered';
  name: string;
  delegate: string;
  values: string[];
  isAllowList?: boolean;
};

export type TVirtualColumn<T> =
  | TExpressionVirtualColumn
  | TNestedFieldVirtualColumn<T>
  | TListFilteredVirtualColumn<T>;
