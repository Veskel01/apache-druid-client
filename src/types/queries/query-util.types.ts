export type TSort = 'lexicographic' | 'alphanumeric' | 'numeric' | 'strlen';
export type TOmitQueryType<T> = Omit<T, 'queryType'>;
export type TDirection = 'ascending' | 'descending' | 'none';
