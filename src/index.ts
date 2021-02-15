import ExpressServer from '__modules/ExpressServer';
import DMarket from '__service/DMarket';
import { Domain } from '__service/DMarket/enums';
import { TMarketItem, TMarketItems } from '__service/DMarket/getMarketItems/types';

import { GET_MARKET_ITEMS_DELAY, MY_OWNER_ID } from '__constants/d-market';

import { Express } from 'express';

import { createBuyItemBody } from '__service/DMarket/buyItems/utils';

import fetch from 'node-fetch';

const server = ExpressServer();

const shoppingBuffer: Map<string, { price: number; title: string }> = new Map<
  string,
  { price: number; title: string }
>();

let minimumPrices: ReadonlyMap<string, number> = new Map<string, number>([]);

let pingData = 0;

export const checkingOfNeedBuyItem = (minimumPrices: ReadonlyMap<string, number>, marketItem: TMarketItem): boolean => {
  const { price, title, inMarket, owner } = marketItem;

  if (owner === MY_OWNER_ID || !inMarket || price === null) {
    return false;
  }

  const itemMinimumPrice = minimumPrices.get(title);

  return itemMinimumPrice === undefined ? false : price <= itemMinimumPrice;
};

const newTrackedItems: Map<string, string> = new Map([]);

const fn = () => {
  setInterval(() => {
    const startDate = Date.now();

    DMarket.api.getMarketItems(Domain.default, DMarket.defaultQuery).then((marketItems: TMarketItems) => {
      pingData = Date.now() - startDate;

      marketItems.forEach((marketItem: TMarketItem) => {
        if (!newTrackedItems.has(marketItem.title) && !minimumPrices.has(marketItem.title)) {
          newTrackedItems.set(marketItem.title, marketItem.slug);
        }

        const { offerId } = marketItem;

        if (!shoppingBuffer.has(offerId) && checkingOfNeedBuyItem(minimumPrices, marketItem)) {
          shoppingBuffer.set(offerId, { price: marketItem.price as number, title: marketItem.title });

          DMarket.api.buyItems(Domain.trading, createBuyItemBody(marketItem)).then(() => {
            pingData = Date.now() - startDate;
          });
        }
      });
    });
  }, GET_MARKET_ITEMS_DELAY);
};

fetch(`https://58rl7cee5b.execute-api.eu-west-2.amazonaws.com/marketDealer/dynamoBDscanTable?table=ItemPrices`)
  .then((res) => {
    if (res.ok) {
      res.json().then((res) => {
        const itemPrices: any = res.Items || [];

        if (itemPrices) {
          minimumPrices = new Map<string, number>(itemPrices.map((i: any) => [i.title, i.avgPurchasePrice]));
          console.log(minimumPrices);
        }
      });
    }
  })
  .then(() => {
    fn();
  })
  .catch(() => {});

setInterval(() => {
  fetch('https://58rl7cee5b.execute-api.eu-west-2.amazonaws.com/marketDealer/updateItemPrices');
  setInterval(() => {
    fetch(
      `https://58rl7cee5b.execute-api.eu-west-2.amazonaws.com/marketDealer/dynamoBDscanTable?table=ItemPrices`
    ).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          const itemPrices: any = res.Items || [];

          if (itemPrices) {
            minimumPrices = new Map<string, number>(itemPrices.map((i: any) => [i.title, i.avgPurchasePrice]));
          }
        });
      }
    });
  }, 300000);
}, 3600000);

server.init((app: Express) => {
  app.get('/prices', (_req, res) => {
    res.send(`<div>${[...minimumPrices.entries()]}</div>`);
  });

  app.get('/newTrackedItems', (_req, res) => {
    res.send([...newTrackedItems.entries()]);
  });

  app.get('/', (_req, res) => {
    res.send(`<div>${pingData}</div>`);
  });
});
