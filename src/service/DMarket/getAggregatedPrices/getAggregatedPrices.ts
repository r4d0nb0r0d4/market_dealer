import Request from '__modules/Request';
import { Method } from '__modules/Request/enums';

import { TGetAggregatedPrices, TGetAggregatedPricesQuery } from './types';
import { convertGetAggregatedPricesQueryToString, rejectHandler, responseHandler } from './utils';

import { Domain, Path } from '../enums';
import { getHeaders } from '../utils';

const path: Path = Path.getAggregatedPrices;

const getAggregatedPrices: TGetAggregatedPrices = (domain: Domain, query: TGetAggregatedPricesQuery): Promise<any> => {
  const encodedQueryAsString: string = encodeURI(convertGetAggregatedPricesQueryToString(query));

  return Request.get<any>(domain + path + encodedQueryAsString, {
    headers: getHeaders(Method.get, path, encodedQueryAsString, null),
  }).then(responseHandler, rejectHandler);
};

export default getAggregatedPrices;
