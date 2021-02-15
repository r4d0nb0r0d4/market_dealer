import {
  Category,
  Currency,
  GameId,
  TreeFiltersKeys,
  MiscCategoryPath,
  Domain,
  OrderBy,
  OrderDir,
  TradableTreeFilter,
} from '../enums';
import { TPrice, TQuery } from '../types';

export type TFilterOptionSet = {
  [Category.misc]: ReadonlySet<MiscCategoryPath>;
};

export type TFilterOptionSetValue = TFilterOptionSet[Category];

export type TCategoryPathFilter = {
  [Category.misc]?: TMiscFilterOption;
};

export type TTradableFilter = ReadonlySet<TradableTreeFilter>;

export type TMapCategoryPathFilterToString = (value: TCategoryPathFilterValue) => string;

export type TCategoryPathFilterValue = TCategoryPathFilter[Category];

export type TGetMarketItems = (domain: Domain, query: TGetMarketItemsQuery) => Promise<TMarketItems>;

export type TGetMarketItemsDto = {
  objects: ReadonlyArray<TMarketItemDto>;
};

export type TGetMarketItemsQuery = {
  currency: Currency;
  gameId: GameId;
  limit: number;
  orderBy: OrderBy;
  orderDir: OrderDir;
  priceFrom: number;
  priceTo: number;
  treeFilters?: TTreeFilters;
  title?: string;
};

export type TMapGetItemsQuery = (query: TGetMarketItemsQuery) => TQuery;

export type TMapGetMarketItemsDtoToMarketItems = (response: TGetMarketItemsDto) => TMarketItems;

export type TMapItemDtoToItem = (itemDto: TMarketItemDto) => TMarketItem;

export type TMarketItem = {
  inMarket: boolean;
  itemId: string;
  price: number;
  suggestedPrice: number;
  title: string;
  name: string;
  offerId: string;
  owner: string;
  slug: string;
};

export type TMarketItems = ReadonlyArray<TMarketItem>;

export type TMarketItemDto = {
  extra: TMarketItemExtraDto;
  inMarket: boolean;
  itemId: string;
  price: TPrice;
  suggestedPrice: TPrice;
  title: string;
  owner: string;
  slug: string;
};

export type TMarketItemExtraDto = {
  name: string;
  offerId: string;
};

export type TMiscFilterOption = TFilterOptionSet[Category.misc] | Category.misc;

export type TResponseHandler = (response: TGetMarketItemsDto | null) => TMarketItems;

export type TRejectHandler = () => TMarketItems;

export type TReplaceTreeFiltersToString = (treeFilters?: TTreeFilters) => string;

export type TReplaceTreeFilterValueToString = ([key, value]: TTreeFilterPair) => string;

export type TTreeFilterPair = [string, TTreeFiltersValue];

export type TTreeFilters = {
  [TreeFiltersKeys.categoryPath]?: TCategoryPathFilter;
  [TreeFiltersKeys.tradable]?: TTradableFilter;
  [TreeFiltersKeys.itemSlug]?: string;
};

export type TTreeFiltersValue = TTreeFilters[TreeFiltersKeys];

export type TMapTradableTreeFilterToString = (value: TradableTreeFilter) => string;
