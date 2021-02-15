import {
  mapCategoryPathFilterToString,
  mapGetMarketItemsDtoToMarketItems,
  mapTradableTreeFilterToString,
} from './mappers';
import {
  TTreeFilters,
  TTreeFilterPair,
  TResponseHandler,
  TReplaceTreeFilterValueToString,
  TReplaceTreeFiltersToString,
  TMarketItems,
  TGetMarketItemsDto,
  TCategoryPathFilterValue,
  TCategoryPathFilter,
  TTreeFiltersValue,
  TRejectHandler,
  TTradableFilter,
} from './types';

import { TradableTreeFilter, TreeFiltersKeys } from '../enums';
import { filterEmptyStrings } from '../utils';

export const responseHandler: TResponseHandler = (response: TGetMarketItemsDto | null): TMarketItems => {
  if (response === null) {
    return [];
  }

  return mapGetMarketItemsDtoToMarketItems(response);
};

export const rejectHandler: TRejectHandler = (): TMarketItems => {
  return [];
};

export const replaceTreeFiltersToString: TReplaceTreeFiltersToString = (treeFilters?: TTreeFilters): string => {
  if (treeFilters === undefined) {
    return '';
  }

  return Object.entries<TTreeFiltersValue>(treeFilters)
    .map<string>(replaceTreeFilterValueToString)
    .filter<string>(filterEmptyStrings)
    .join(',');
};

export const replaceTreeFilterValueToString: TReplaceTreeFilterValueToString = (pair: TTreeFilterPair): string => {
  const key: TreeFiltersKeys = pair[0] as TreeFiltersKeys;
  const value: TTreeFiltersValue = pair[1];

  if (key === undefined || value === undefined) {
    return '';
  }

  if (key === TreeFiltersKeys.categoryPath) {
    return Object.values<TCategoryPathFilterValue>(value as TCategoryPathFilter)
      .map<string>(mapCategoryPathFilterToString)
      .filter<string>(filterEmptyStrings)
      .join(',');
  }

  if (key === TreeFiltersKeys.itemSlug) {
    return `itemSlug[]=${value}`;
  }

  if (key === TreeFiltersKeys.tradable) {
    return Array.from<TradableTreeFilter>(value as TTradableFilter)
      .map<string>(mapTradableTreeFilterToString)
      .join(',');
  }

  return '';
};
