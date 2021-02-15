import Request from '__modules/Request';
import { Method } from '__modules/Request/enums';

import { TGetMarketItems, TGetMarketItemsDto, TGetMarketItemsQuery, TMarketItems } from './types';
import { rejectHandler, responseHandler } from './utils';
import { mapGetItemsQuery } from './mappers';

import { Domain, Path } from '../enums';
import { convertQueryToString, getHeaders } from '../utils';

const path: Path = Path.getMarketItems;

const getMarketItems: TGetMarketItems = (domain: Domain, query: TGetMarketItemsQuery): Promise<TMarketItems> => {
  const encodedQueryAsString: string = encodeURI(convertQueryToString(mapGetItemsQuery(query)));

  return Request.get<TGetMarketItemsDto>(domain + path + encodedQueryAsString, {
    headers: getHeaders(Method.get, path, encodedQueryAsString, null),
  }).then(responseHandler, rejectHandler);
};

export default getMarketItems;
