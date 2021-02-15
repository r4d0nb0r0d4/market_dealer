import { mapGetLastSalesDtoToLastSales } from './mappers';
import { TResponseHandler, TRejectHandler, TGetLastSalesDto, TLastSales } from './types';

export const responseHandler: TResponseHandler = (response: TGetLastSalesDto | null): TLastSales => {
  if (response === null) {
    return [];
  }

  return mapGetLastSalesDtoToLastSales(response);
};

export const rejectHandler: TRejectHandler = (): TLastSales => {
  return [];
};
