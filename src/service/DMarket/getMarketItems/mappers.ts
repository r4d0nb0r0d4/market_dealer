import {
  TCategoryPathFilterValue,
  TFilterOptionSetValue,
  TGetMarketItemsDto,
  TGetMarketItemsQuery,
  TMapCategoryPathFilterToString,
  TMapGetItemsQuery,
  TMapGetMarketItemsDtoToMarketItems,
  TMapItemDtoToItem,
  TMapTradableTreeFilterToString,
  TMarketItem,
  TMarketItemDto,
  TMarketItems,
} from './types';
import { replaceTreeFiltersToString } from './utils';

import { TQuery } from '../types';
import { Category, Currency, TradableTreeFilter } from '../enums';
import { isSet } from '../utils';

export const mapGetItemsQuery: TMapGetItemsQuery = (query: TGetMarketItemsQuery): TQuery => {
  return {
    ...query,
    treeFilters: replaceTreeFiltersToString(query.treeFilters),
  };
};

export const mapGetMarketItemsDtoToMarketItems: TMapGetMarketItemsDtoToMarketItems = (
  response: TGetMarketItemsDto
): TMarketItems => {
  return response.objects.map<TMarketItem>(mapItemDtoToItem);
};

export const mapItemDtoToItem: TMapItemDtoToItem = (itemDto: TMarketItemDto): TMarketItem => {
  const {
    extra: { name, offerId },
    inMarket,
    itemId,
    price: { [Currency.USD]: usdPrice },
    suggestedPrice: { [Currency.USD]: usdSuggestedPrice },
    title,
    owner,
    slug,
  } = itemDto;

  return {
    inMarket,
    itemId,
    price: Number(usdPrice),
    suggestedPrice: Number(usdSuggestedPrice),
    name,
    offerId,
    title,
    owner,
    slug,
  };
};

export const mapCategoryPathFilterToString: TMapCategoryPathFilterToString = (
  value: TCategoryPathFilterValue
): string => {
  if (value === undefined) {
    return '';
  }

  if (isSet<TFilterOptionSetValue>(value)) {
    return Array.from<TFilterOptionSetValue>(value)
      .map<string>((value: TFilterOptionSetValue) => `categoryPath[]=${value}`)
      .join(',');
  }

  return `categoryPath[]=${value as Category}`;
};

export const mapTradableTreeFilterToString: TMapTradableTreeFilterToString = (value: TradableTreeFilter) => {
  return `tradable[]=${value}`;
};
