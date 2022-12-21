// TODO = ssl config

interface IDatabaseMetadata {
  type: 'mysql' | 'postgresql';
  connector: {
    connectorURI: string;
    user?: string;
    password?: string;
    useSSL?: boolean;
  };
}

export type TSqlInputSource = {
  type: 'sql';
  database: IDatabaseMetadata;
  foldCase?: boolean;
  sqls: string[];
};
