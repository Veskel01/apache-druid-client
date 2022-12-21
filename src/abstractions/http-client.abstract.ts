import { IHttpResponse } from '../types/http';

export abstract class AbstractHttpClient<
  TInstance = unknown,
  TInstanceConfig = unknown,
  TRequestConfig = unknown
> {
  protected readonly instance: TInstance;

  protected abstract createInstance(config: TInstanceConfig): TInstance;

  constructor(config: TInstanceConfig) {
    this.instance = this.createInstance(config);
  }

  public abstract setDruidBaseUrl(url: URL): void;
  public abstract get<T>(url: string, config?: TRequestConfig): Promise<IHttpResponse<T>>;
  public abstract post<T>(url: string, data?: unknown, config?: TRequestConfig): Promise<IHttpResponse<T>>;
  public abstract put<T>(url: string, data?: unknown, config?: TRequestConfig): Promise<IHttpResponse<T>>;
  public abstract patch<T>(url: string, data?: unknown, config?: TRequestConfig): Promise<IHttpResponse<T>>;
  public abstract delete<T>(url: string, config?: TRequestConfig): Promise<IHttpResponse<T>>;
  public abstract head<T>(url: string, config?: TRequestConfig): Promise<IHttpResponse<T>>;
  public abstract options<T>(url: string, config?: TRequestConfig): Promise<IHttpResponse<T>>;

  public get instanceRef(): Readonly<TInstance> {
    return this.instance;
  }
}
