import { AxiosHttpClientAdapter } from './adapters';
import { AbstractHttpClient } from './abstractions';
import { CreateAxiosDefaults } from 'axios';
import { IDruidClientOptions } from './types';
import { QueryApi } from './api';

export class DruidClient {
  private readonly DRUID_URL: URL;

  private http: AbstractHttpClient;

  constructor({ url, httpConfig = {} }: IDruidClientOptions<Omit<CreateAxiosDefaults, 'baseURL'>>) {
    this.http = new AxiosHttpClientAdapter({
      ...httpConfig,
      baseURL: url
    });
    this.DRUID_URL = new URL(url);
  }

  public get queryApi(): QueryApi {
    return QueryApi.getInstance(this.http);
  }

  public setHttpAdapter(http: AbstractHttpClient): void {
    http.setDruidBaseUrl(this.DRUID_URL);
    this.http = http;
  }
}
