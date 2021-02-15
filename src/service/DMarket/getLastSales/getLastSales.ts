import Request from '__modules/Request';
import { Method } from '__modules/Request/enums';

import { TGetLastSales, TGetLastSalesDto, TGetLastSalesQuery, TLastSales } from './types';
import { rejectHandler, responseHandler } from './utils';

import { Domain, Path } from '../enums';
import { convertQueryToString, getHeaders } from '../utils';

const path: Path = Path.lastSales;

const getLastSales: TGetLastSales = (domain: Domain, query: TGetLastSalesQuery): Promise<TLastSales> => {
  const encodedQueryAsString: string = encodeURI(convertQueryToString(query));

  return Request.get<TGetLastSalesDto>(domain + path + encodedQueryAsString, {
    headers: getHeaders(Method.get, path, encodedQueryAsString, null),
  }).then(responseHandler, rejectHandler);
};

export default getLastSales;
