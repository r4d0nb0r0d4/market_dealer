import { Express } from 'express';

import { DEFAULT_CONTAINER_DEALER_PORT } from '__constants/ports';

import ExpressServer from '__modules/ExpressServer';
import { TCallback, TExpressServer } from '__modules/ExpressServer/types';

import ContainerDealerRoute from '__routes/ContainerDealerRoute';

const server: TExpressServer = ExpressServer({ port: DEFAULT_CONTAINER_DEALER_PORT });

const serverMiddleware: TCallback = (app: Express) => {
  app.use(ContainerDealerRoute);
};

server.init(serverMiddleware);
