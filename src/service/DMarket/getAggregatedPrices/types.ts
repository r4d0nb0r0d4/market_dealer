import { Domain } from '../enums';

export type TGetAggregatedPrices = (domain: Domain, query: TGetAggregatedPricesQuery) => Promise<any>;

export type TGetAggregatedPricesQuery = {
  titles: ReadonlyArray<string>;
  limit: number;
};

export type TResponseHandler = (response: any | null) => any;

export type TRejectHandler = () => any;
