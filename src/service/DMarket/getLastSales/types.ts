import { Currency, GameId, Domain } from '../enums';

export type TGetLastSales = (domain: Domain, query: TGetLastSalesQuery) => Promise<TLastSales>;

export type TGetLastSalesQuery = {
  Title: string;
  Currency: Currency;
  GameID: GameId;
};

export type TLastSale = {
  date: Date;
  price: number;
};

export type TLastSales = ReadonlyArray<TLastSale>;

export type TGetLastSalesDto = {
  LastSales: ReadonlyArray<TLastSaleDto>;
};

export type TLastSaleDto = {
  Date: string;
  Price: {
    Currency: Currency;
    Amount: string;
  };
};

export type TMapGetLastSalesDtoToLastSales = (response: TGetLastSalesDto) => TLastSales;

export type TMapLastSaleDtoToLastSale = (itemDto: TLastSaleDto) => TLastSale;

export type TResponseHandler = (response: TGetLastSalesDto | null) => TLastSales;

export type TRejectHandler = () => TLastSales;
