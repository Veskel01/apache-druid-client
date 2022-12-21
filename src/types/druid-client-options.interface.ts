export interface IDruidClientOptions<THttpAdapterConfig> {
  readonly url: string;
  readonly httpConfig?: THttpAdapterConfig;
}
