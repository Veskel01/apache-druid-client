export type THttpInputSource = {
  type: 'http';
  uris: string[];
  httpAuthenticationUsername?: string;
  httpAuthenticationPassword?: string;
};
