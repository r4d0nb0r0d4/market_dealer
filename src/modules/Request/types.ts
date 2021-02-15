import { AxiosResponse } from 'axios';

import { Method } from './enums';

export type TBaseRequest = <R = any>(method: Method, url: string, options?: TOptions) => Promise<R | null>;

export type TOptions = {
  data?: any;
  headers?: HeadersInit;
};

export type TResponseError = {
  error: string;
  error_description: string;
};

export type TResponseHandler = <R = any>(response: AxiosResponse<R | TResponseError>) => R | null;

export type TRejectHandler = () => null;

export type TRequest = {
  get: TSpecificRequest;
  post: TSpecificRequest;
  put: TSpecificRequest;
  delete: TSpecificRequest;
  patch: TSpecificRequest;
};

export type TSpecificRequest = <R = any>(url: string, options?: TOptions) => Promise<R | null>;
