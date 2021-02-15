import { Currency, Domain, OfferType } from '../enums';
import { TMarketItem } from '../getMarketItems/types';

export type TBuyItemsBody = {
  offers: ReadonlyArray<TOfferInfo>;
};

export type TOfferInfo = {
  offerId: string;
  price: TOfferPrice;
  type: OfferType;
};

export type TOfferPrice = {
  amount: string;
  currency: Currency;
};

export type TBuyItemsResponseDto = {
  txId: string;
  status: string;
  orderId: string;
  dmOffersStatus: Object;
  dmOffersFailReason: {
    code: string;
  };
};

export type TBuyItemsResponse = {
  status: string | null;
  orderId: string | null;
  dmOffersFailReasonCode: string | null;
};

export type TGetResponseTemplate = () => TBuyItemsResponse;

export type TMapBuyItemsResponseDtoToBuyItemsResponse = (
  buyItemsResponseDto: TBuyItemsResponseDto
) => TBuyItemsResponse;

export type TBuyItems = (domain: Domain, buyItemsBody: TBuyItemsBody) => Promise<TBuyItemsResponse>;

export type TResponseHandler = (response: TBuyItemsResponseDto | null) => TBuyItemsResponse;

export type TRejectHandler = () => TBuyItemsResponse;

export type TCreateBuyItemBody = (item: TMarketItem) => TBuyItemsBody;
