import Request from '__modules/Request';
import { Method } from '__modules/Request/enums';

import { TBuyItems, TBuyItemsBody, TBuyItemsResponse, TBuyItemsResponseDto } from './types';
import { rejectHandler, responseHandler } from './utils';

import { Domain, Path } from '../enums';
import { getHeaders } from '../utils';

const path: Path = Path.buyItems;

const buyItems: TBuyItems = (domain: Domain, buyItemsBody: TBuyItemsBody): Promise<TBuyItemsResponse> => {
  const bodyAsString: string = JSON.stringify(buyItemsBody);

  return Request.patch<TBuyItemsResponseDto>(domain + path, {
    headers: getHeaders(Method.patch, path, null, bodyAsString),
    data: buyItemsBody,
  }).then(responseHandler, rejectHandler);
};

export default buyItems;
