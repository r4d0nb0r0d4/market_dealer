import { TBuyItemsResponse, TBuyItemsResponseDto, TMapBuyItemsResponseDtoToBuyItemsResponse } from './types';

export const mapBuyItemsResponseDtoToBuyItemsResponse: TMapBuyItemsResponseDtoToBuyItemsResponse = (
  buyItemsResponseDto: TBuyItemsResponseDto
): TBuyItemsResponse => {
  const {
    status,
    orderId,
    dmOffersFailReason: { code },
  } = buyItemsResponseDto;

  return {
    status,
    orderId,
    dmOffersFailReasonCode: code,
  };
};
