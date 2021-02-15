import { AxiosResponse } from 'axios';

import ConsoleMessage from '__modules/ConsoleMessage';

import { TRejectHandler, TResponseError, TResponseHandler } from './types';

export const responseHandler: TResponseHandler = <R = any>(response: AxiosResponse<R | TResponseError>): R | null => {
  if (response.status === 200) {
    ConsoleMessage.success(`Success Request`);

    return response.data as R;
  }

  const { error, error_description } = response.data as TResponseError;
  ConsoleMessage.error(`${error} (${error_description})`);

  return null;
};

export const rejectHandler: TRejectHandler = (): null => {
  ConsoleMessage.error(`Request Error`);

  return null;
};
