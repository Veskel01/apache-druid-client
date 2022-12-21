import { AbstractHttpClient } from '../abstractions';
import { ISqlQueryRequest, TNativeQuery } from '../types';

export class QueryApi {
  private static instance: QueryApi;

  private readonly ENDPOINTS = {
    native: '/druid/v2',
    sql: '/druid/v2/sql'
  };

  private constructor(private readonly http: AbstractHttpClient) {}

  public static getInstance(http: AbstractHttpClient): QueryApi {
    if (!QueryApi.instance) {
      QueryApi.instance = new QueryApi(http);
    }
    return QueryApi.instance;
  }

  public async sendNativeQuery<T = unknown>(nativeQuery: TNativeQuery<Record<string, unknown>>): Promise<T> {
    const { data } = await this.http.post<T>(this.ENDPOINTS.native, nativeQuery);
    return data;
  }

  public async sendSqlQuery<T>(request: ISqlQueryRequest): Promise<T> {
    const { data } = await this.http.post<T>(this.ENDPOINTS.sql, {
      query: request.query
    });
    return data;
  }
}
