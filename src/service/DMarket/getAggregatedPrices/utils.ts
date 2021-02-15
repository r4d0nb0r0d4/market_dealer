import { TResponseHandler, TRejectHandler, TGetAggregatedPricesQuery } from './types';

export const responseHandler: TResponseHandler = (response: any | null): any => {
  if (response === null) {
    return [];
  }

  return response;
};

export const rejectHandler: TRejectHandler = (): any => {
  return [];
};

export const convertGetAggregatedPricesQueryToString = (query: TGetAggregatedPricesQuery): string => {
  const { titles, limit } = query;

  return `?${titles.map((title: string) => `titles=${title}`).join('&')}&limit${limit}`;
};
