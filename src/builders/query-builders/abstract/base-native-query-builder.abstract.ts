import { IQueryContext, TDataSource, TNativeQuery, TQueryType } from '../../../types';

export abstract class AbstractBaseNativeQueryBuilder<
  TDataRow,
  TNativeQueryType extends TNativeQuery<TDataRow> = TNativeQuery<TDataRow>
> {
  private readonly immutableKeys: string[] = ['queryType'];

  private state: TNativeQueryType = {} as TNativeQueryType;

  // TODO - agg definition file Path
  constructor() {
    this.resetState();

    this.state.queryType = this.getQueryType();

    const defaults = this.initDefaults();

    this.state = {
      ...this.state,
      ...defaults
    };
  }

  protected abstract initDefaults(): Partial<Omit<TNativeQueryType, 'queryType'>>;

  protected abstract getQueryType(): TQueryType;

  protected mergeToArray<T>(value: T[] | T): T[] {
    return Array.isArray(value) ? value : [value];
  }

  protected updateState(updateData: Partial<TNativeQuery<TDataRow>>): void {
    this.state = {
      ...this.state,
      ...Object.keys(updateData).reduce((acc, key) => {
        if (this.immutableKeys.includes(key)) {
          return acc;
        }
        return {
          ...acc,
          [key]: updateData[key as keyof TNativeQuery<TDataRow>]
        };
      }, {} as TNativeQuery<TDataRow>)
    };
  }

  public dataSource(dataSource: TDataSource): this {
    this.updateState({ dataSource });
    return this;
  }

  public context(context: IQueryContext): this {
    this.updateState({ context });
    return this;
  }

  // TODO - parse query
  public build(): TNativeQueryType {
    return this.state;
  }

  private resetState(): void {
    this.state = {} as TNativeQueryType;
  }
}
