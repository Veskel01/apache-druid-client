import { ISqlQueryContext } from './sql-query-context.interface';

type TSqlResultFormat = 'array' | 'object' | 'objectLines' | 'arrayLines' | 'csv';

type TParameterType =
  | 'CHAR'
  | 'VARCHAR'
  | 'DECIMAL'
  | 'FLOAT'
  | 'REAL'
  | 'DOUBLE'
  | 'BOOLEAN'
  | 'TINYINT'
  | 'SMALLINT'
  | 'INTEGER'
  | 'BIGINT'
  | 'TIMESTAMP'
  | 'DATE'
  | 'OTHER';

export interface ISqlQueryRequest {
  readonly query: string;
  readonly resultFormat?: TSqlResultFormat;
  readonly context?: ISqlQueryContext;
  readonly header?: boolean;
  readonly typesHeader?: boolean;
  readonly sqlTypesHeader?: boolean;
  readonly parameters?: Array<{
    type: TParameterType;
    value: unknown;
  }>;
}
