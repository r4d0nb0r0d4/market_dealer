import { mapBuyItemsResponseDtoToBuyItemsResponse } from './mappers';
import {
  TBuyItemsBody,
  TBuyItemsResponse,
  TBuyItemsResponseDto,
  TCreateBuyItemBody,
  TGetResponseTemplate,
  TRejectHandler,
  TResponseHandler,
} from './types';

import { TMarketItem } from '../getMarketItems/types';
import { Currency, OfferType } from '../enums';

export const getResponseTemplate: TGetResponseTemplate = (): TBuyItemsResponse => {
  return {
    status: null,
    orderId: null,
    dmOffersFailReasonCode: null,
  };
};

export const responseHandler: TResponseHandler = (response: TBuyItemsResponseDto | null): TBuyItemsResponse => {
  if (response == null) {
    return getResponseTemplate();
  }

  return mapBuyItemsResponseDtoToBuyItemsResponse(response);
};

export const rejectHandler: TRejectHandler = (): TBuyItemsResponse => {
  return getResponseTemplate();
};

export const createBuyItemBody: TCreateBuyItemBody = (item: TMarketItem): TBuyItemsBody => {
  return {
    offers: [
      {
        offerId: item.offerId,
        price: {
          amount: String(item.price),
          currency: Currency.USD,
        },
        type: OfferType.dMarket,
      },
    ],
  };
};
