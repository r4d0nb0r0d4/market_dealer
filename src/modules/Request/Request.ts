import axios from 'axios';

import { Method } from './enums';
import { TBaseRequest, TOptions, TRequest, TResponseError, TSpecificRequest } from './types';
import { rejectHandler, responseHandler } from './utils';

const baseRequest: TBaseRequest = <R = any>(method: Method, url: string, options?: TOptions): Promise<R | null> => {
  return axios
    .request<R | TResponseError>({
      method,
      url,
      ...options,
    })
    .then(responseHandler, rejectHandler);
};

const Request: TRequest = {
  get: baseRequest.bind(null, Method.get) as TSpecificRequest,
  post: baseRequest.bind(null, Method.post) as TSpecificRequest,
  put: baseRequest.bind(null, Method.put) as TSpecificRequest,
  delete: baseRequest.bind(null, Method.delete) as TSpecificRequest,
  patch: baseRequest.bind(null, Method.patch) as TSpecificRequest,
};

export default Request;
