import { mapBuyItemsResponseDtoToBuyItemsResponse } from './mappers';
import {
  TBuyItemsResponse,
  TBuyItemsResponseDto,
  TGetResponseTemplate,
  TRejectHandler,
  TResponseHandler,
} from './types';

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
