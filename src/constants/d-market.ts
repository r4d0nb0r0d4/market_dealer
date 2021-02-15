import { Currency, GameId, OrderBy, OrderDir } from '__service/DMarket/enums';
import { TGetMarketItemsQuery } from '__service/DMarket/getMarketItems/types';
import { TKeyPair } from '__service/DMarket/types';

export const MAIN_KEYS: TKeyPair = [
  '3ec4bd6ad6329ffe210734d1b63c17b44f108331bc3717baba355f360678ffaa',
  '7a0937fbfce3d16b43716ca3616aeb1c2053074bb8f920da1600eb7efc1ff3483ec4bd6ad6329ffe210734d1b63c17b44f108331bc3717baba355f360678ffaa',
];

export const GET_MARKET_ITEMS_RPS: number = 10;
export const GET_MARKET_ITEMS_DELAY: number = Math.round(1000 / GET_MARKET_ITEMS_RPS);

export const DEFAULT_CACHE_HEADER: string = 'no-store, no-cache, must-revalidate, private';

export const MY_OWNER_ID = '38ae1a5e-e8bd-4ec9-a5c4-f3ff382eee3f';

export const MIN_PROFIT = 3;

export const CHECK_AND_BUY_CONTAINERS_LAMBDA_LIFETIME = 2500;

export const DEFAULT_QUERY: TGetMarketItemsQuery = {
  orderBy: OrderBy.updated,
  orderDir: OrderDir.desc,
  gameId: GameId.CSGO,
  limit: 20,
  currency: Currency.USD,
};
