import { Currency, Path } from '__service/DMarket/enums';

import { TGetMarketItems, TGetMarketItemsQuery } from './getMarketItems/types';
import { TBuyItems } from './buyItems/types';
import { TGetLastSales } from './getLastSales/types';
import { Method } from '__modules/Request/enums';

export type TQueryValues = string | number | boolean | null | undefined;

export type TQuery = Record<string, TQueryValues>;

export type TQueryPair = [string, TQueryValues];

export type TByteToHexString = (uint8arr: Uint8Array) => string;

export type TGetTimestamp = () => string;

export type THexStringToByte = (str: string) => Uint8Array;

export type TConvertQueryToString = (query: TQuery) => string;

export type TRemoveEmptyProps = (query: TQuery) => TQuery;

export type TFilterEmptyField = (pair: TQueryPair) => boolean;

export type TMapQueryPairToString = (pair: TQueryPair) => string;

export type TDMarket = {
  api: TApi;
  defaultQuery: TGetMarketItemsQuery;
};

export type TApi = {
  getMarketItems: TGetMarketItems;
  buyItems: TBuyItems;
  getLastSales: TGetLastSales;
};

export type TGetHeaders = (
  method: Method,
  path: Path,
  queryAsString: string | null,
  bodyAsString: string | null
) => THeaders;

export type THeaders = {
  'X-Api-Key': string;
  'X-Request-Sign': string;
  'X-Sign-Date': string;
  'Cache-Control': string;
};

export type TPrice = Record<Currency, string>;

export type TIsSet = <T = any>(value: any) => value is Set<T>;

export type TFilterEmptyStrings = (value: string) => value is string;

export type TKeyPair = readonly [string, string];
