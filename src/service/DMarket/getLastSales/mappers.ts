import {
  TGetLastSalesDto,
  TLastSale,
  TLastSaleDto,
  TLastSales,
  TMapGetLastSalesDtoToLastSales,
  TMapLastSaleDtoToLastSale,
} from './types';

export const mapGetLastSalesDtoToLastSales: TMapGetLastSalesDtoToLastSales = (
  response: TGetLastSalesDto
): TLastSales => {
  return response.LastSales.map<TLastSale>(mapLastSaleDtoToLastSale);
};

export const mapLastSaleDtoToLastSale: TMapLastSaleDtoToLastSale = (itemDto: TLastSaleDto): TLastSale => {
  const { Price, Date: itemDate } = itemDto;

  return {
    date: new Date(Number(itemDate) * 1000),
    price: Number(Price.Amount),
  };
};
