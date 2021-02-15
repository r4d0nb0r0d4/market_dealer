import { DEFAULT_QUERY } from '__constants/d-market';

import { TDMarket } from './types';

import getMarketItems from './getMarketItems';
import buyItems from './buyItems';
import getLastSales from './getLastSales';

const DMarket: TDMarket = {
  api: {
    getMarketItems,
    buyItems,
    getLastSales,
  },
  defaultQuery: DEFAULT_QUERY,
};

export default DMarket;
