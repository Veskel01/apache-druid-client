import Axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource, CreateAxiosDefaults } from 'axios';
import { AbstractHttpClient } from '../abstractions';
import { IHttpResponse } from '../types';

export class AxiosHttpClientAdapter extends AbstractHttpClient<
  AxiosInstance,
  CreateAxiosDefaults,
  AxiosRequestConfig
> {
  protected createInstance(config: CreateAxiosDefaults): AxiosInstance {
    return Axios.create({
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      }
    });
  }

  public setDruidBaseUrl(url: URL): void {
    this.instance.defaults.baseURL = url.toString();
  }

  public get<T>(url: string, config: AxiosRequestConfig = {}): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('GET', url, config, undefined);
  }

  public post<T>(url: string, data?: unknown, config: AxiosRequestConfig = {}): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('POST', url, config, data);
  }

  public put<T>(url: string, data?: unknown, config: AxiosRequestConfig = {}): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('PUT', url, config, data);
  }

  public patch<T>(url: string, data?: unknown, config: AxiosRequestConfig = {}): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('PATCH', url, config, data);
  }

  public delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('DELETE', url, config);
  }

  public head<T>(url: string, config: AxiosRequestConfig = {}): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('HEAD', url, config);
  }

  public options<T>(url: string, config?: AxiosRequestConfig | undefined): Promise<IHttpResponse<T>> {
    return this.makeRequest<T>('OPTIONS', url, config);
  }

  private async makeRequest<T>(
    type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS',
    url: string,
    config: AxiosRequestConfig = {},
    data: unknown = undefined
  ): Promise<IHttpResponse<T>> {
    const configCopy = { ...config };

    let cancelSource: CancelTokenSource | undefined;

    if (!config?.cancelToken) {
      cancelSource = Axios.CancelToken.source();
      configCopy.cancelToken = cancelSource.token;
    }

    const {
      data: responseData,
      status,
      headers: responseHeaders,
      statusText
    } = await this.instance.request<T>({
      ...configCopy,
      url,
      method: type,
      data
    });

    if (cancelSource) {
      cancelSource.cancel();
    }

    return {
      data: responseData,
      headers: responseHeaders || {},
      status,
      statusText
    };
  }
}
