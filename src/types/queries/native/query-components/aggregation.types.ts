type TTimeColumn<T> = '__time' | keyof T;

export type TCountAggregator = {
  type: 'count';
  name: string;
};

export type TSumAggregators<T> = {
  type: 'longSum' | 'doubleSum' | 'floatSum';
  name: string;
  fieldName: keyof T;
};

export type TMinAggregators<T> = {
  type: 'longMin' | 'doubleMin' | 'floatMin';
  name: string;
  fieldName: keyof T;
};

export type TMaxAggregators<T> = {
  type: 'longMax' | 'doubleMax' | 'floatMax';
  name: string;
  fieldName: keyof T;
};

export type TFirstAggregators<T> =
  | {
      type: 'doubleFirst' | 'floatFirst' | 'longFirst';
      name: string;
      fieldName: keyof T;
      timeColumn?: TTimeColumn<T>;
    }
  | {
      type: 'stringFirst';
      name: string;
      fieldName: keyof T;
      maxStringBytes?: number;
      timeColumn?: TTimeColumn<T>;
    };

export type TLastAggregators<T> =
  | {
      type: 'doubleLast' | 'floatLast' | 'longLast';
      name: string;
      fieldName: keyof T;
      timeColumn?: TTimeColumn<T>;
    }
  | {
      type: 'stringLast';
      name: string;
      fieldName: keyof T;
      maxStringBytes?: number;
      timeColumn?: TTimeColumn<T>;
    };

export type TAnyAggregator<T> =
  | {
      type: 'doubleAny' | 'floatAny' | 'longAny';
      name: string;
      fieldName: keyof T;
    }
  | {
      type: 'stringAny';
      name: string;
      fieldName: keyof T;
      maxStringBytes?: number;
    };

export type TJavascriptAggregator<T> = {
  type: 'javascript';
  name: string;
  fieldNames: (keyof T)[];
  fnAggregate: string;
  fnCombine: string;
  fnReset: string;
};

export type TAggregation<T> =
  | TCountAggregator
  | TSumAggregators<T>
  | TMinAggregators<T>
  | TMaxAggregators<T>
  | TFirstAggregators<T>
  | TLastAggregators<T>
  | TAnyAggregator<T>
  | TJavascriptAggregator<T>;
