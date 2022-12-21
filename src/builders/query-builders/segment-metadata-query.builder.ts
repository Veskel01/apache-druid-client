import { ISegmentMetadataQuery, TAnalysisType, TQueryType, TSegmentMetadataToInclude } from '../../types';
import { AbstractTimeseriesQueryBuilder } from './abstract/timeseries-query-builder.abstract';

export class SegmentMetadataQueryBuilder<TDataRow> extends AbstractTimeseriesQueryBuilder<
  TDataRow,
  ISegmentMetadataQuery<TDataRow>
> {
  protected getQueryType(): TQueryType {
    return 'segmentMetadata';
  }

  protected initDefaults(): Partial<Omit<ISegmentMetadataQuery<TDataRow>, 'queryType'>> {
    return {
      toInclude: { type: 'all' },
      merge: false,
      analysisTypes: ['cardinality', 'interval', 'minmax'],
      lenientAggregatorMerge: false
    };
  }

  public toInclude(toInclude: TSegmentMetadataToInclude<TDataRow>): this {
    this.updateState({ toInclude });
    return this;
  }

  public merge(merge: boolean): this {
    this.updateState({ merge });
    return this;
  }

  public analysisTypes(...analysisTypes: TAnalysisType[]): this {
    this.updateState({ analysisTypes });
    return this;
  }

  public lenientAggregatorMerge(lenientAggregatorMerge: boolean): this {
    this.updateState({ lenientAggregatorMerge });
    return this;
  }
}
