export type TContainsSearchQuerySpec = {
  type: 'contains';
  value: string;
  caseSensitive?: boolean;
};

export type TInsensitiveContainsSearchQuerySpec = {
  type: 'insensitive_contains';
  value: string;
};

export type TFragmentSearchQuerySpec = {
  type: 'fragment';
  value: string;
  caseSensitive?: boolean;
};

export type TSearchQuerySpec =
  | TContainsSearchQuerySpec
  | TInsensitiveContainsSearchQuerySpec
  | TFragmentSearchQuerySpec;
