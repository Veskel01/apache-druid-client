import { IScanQuery, TDirection, TFilter, TQueryType, TScanQueryResultFormat } from '../../types';
import { AbstractTimeseriesQueryBuilder } from './abstract/timeseries-query-builder.abstract';

export class ScanQueryBuilder<TDataRow> extends AbstractTimeseriesQueryBuilder<
  TDataRow,
  IScanQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'scan';
  }

  protected initDefaults(): Partial<Omit<IScanQuery<TDataRow>, 'queryType'>> {
    return {
      intervals: []
    };
  }

  public resultFormat(format: TScanQueryResultFormat): this {
    this.updateState({ resultFormat: format });
    return this;
  }

  public filter(filter: TFilter<TDataRow>): this {
    this.updateState({ filter });
    return this;
  }

  public columns(columns: Array<keyof TDataRow>): this {
    this.updateState({ columns });
    return this;
  }

  public batchSize(batchSize: number): this {
    this.updateState({ batchSize });
    return this;
  }

  public limit(limit: number): this {
    this.updateState({ limit });
    return this;
  }

  public offset(offset: number): this {
    this.updateState({ offset });
    return this;
  }

  public order(order: TDirection): this {
    this.updateState({ order });
    return this;
  }

  public legacy(legacy: boolean): this {
    this.updateState({ legacy });
    return this;
  }
}
