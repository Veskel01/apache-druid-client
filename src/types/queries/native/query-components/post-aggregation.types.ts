export type TPostAggregatorOrdering = 'numericFirst' | null;

export type TArithmeticPostAggregator = {
  type: 'arithmetic';
  name: string;
  fn: '+' | '-' | '*' | '/';
  fields: Array<TPostAggregation>;
  ordering?: TPostAggregatorOrdering;
};

export type FieldAccessorPostAggregator = {
  type: 'fieldAccess' | 'finalizingFieldAccess';
  name?: string;
  fieldName: string;
};

export type TConstantPostAggregator = {
  type: 'constant';
  name: string;
  value: number;
};

export type TExpressionPostAggregator = {
  type: 'expression';
  name: string;
  expression: string;
  ordering?: TPostAggregatorOrdering;
};

export type TGreatestLeastPostAggregator = {
  type: 'doubleGreatest' | 'longGreatest' | 'doubleLeast' | 'longLeast';
  name: string;
  fields: Array<TPostAggregation>;
};

// TODO - function builder
export type TJavascriptPostAggregator = {
  type: 'javascript';
  name: string;
  fieldNames: Array<string>;
  function: string;
};

export type THyperUniqueCardinalityPostAggregator = {
  type: 'hyperUniqueCardinality';
  name: string;
  fieldName: string;
};

export type TPostAggregation =
  | TArithmeticPostAggregator
  | FieldAccessorPostAggregator
  | TConstantPostAggregator
  | TExpressionPostAggregator
  | TGreatestLeastPostAggregator
  | TJavascriptPostAggregator
  | THyperUniqueCardinalityPostAggregator;
