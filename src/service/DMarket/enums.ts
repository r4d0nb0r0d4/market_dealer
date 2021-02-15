export enum Domain {
  default = 'https://api.dmarket.com',
  trading = 'https://trading.dmarket.com',
}

export enum Path {
  'getUser' = '/account/v1/user',
  'getBalance' = '/account/v1/balance',
  'depositAssets' = '/marketplace-api/v1/deposit-assets',
  'getDepositStatus' = '/marketplace-api/v1/deposit-status/',
  'getUserOffers' = '/marketplace-api/v1/user-offers',
  'createUserOffers' = '/marketplace-api/v1/user-offers/create',
  'editUserOffers' = '/marketplace-api/v1/user-offers/edit',
  'getMarketItems' = '/exchange/v1/market/items',
  'removeOffers' = '/exchange/v1/offers',
  'getUserInventory' = '/marketplace-api/v1/user-inventory',
  'updateUserInventory' = '/marketplace-api/v1/user-inventory/sync',
  'withdrawAssets' = '/exchange/v1/withdraw-assets',
  'getUserItems' = '/exchange/v1/user/items',
  'getOffersByTitle' = '/exchange/v1/offers-by-title',
  'getAggregatedPrices' = '/price-aggregator/v1/aggregated-prices',
  'getUserTargets' = '/marketplace-api/v1/user-targets',
  'getClosedTargets' = '/marketplace-api/v1/user-targets/closed',
  'createUserTargets' = '/marketplace-api/v1/user-targets/create',
  'removeUserTargets' = '/marketplace-api/v1/user-targets/delete',
  'buyItems' = '/exchange/v1/offers-buy',
  'lastSales' = '/marketplace-api/v1/last-sales',
}

export enum Currency {
  'USD' = 'USD',
}

export enum GameId {
  'CSGO' = 'a8db',
}

export enum OrderBy {
  'price' = 'price',
  'updated' = 'updated',
  'bestDiscount' = 'best_discount',
  'bestDeals' = 'best_deals',
}

export enum OrderDir {
  'asc' = 'asc',
  'desc' = 'desc',
}

export enum TreeFiltersKeys {
  'categoryPath' = 'categoryPath',
  'itemSlug' = 'itemSlug',
  'tradable' = 'tradable',
}

export enum Category {
  'misc' = 'misc',
}

export enum MiscCategoryPath {
  'container' = 'misc/container',
  'sticker' = 'misc/sticker',
}

export enum OfferType {
  'dMarket' = 'dmarket',
}

export enum TradableTreeFilter {
  'true' = 'true',
  'false' = 'false',
}
