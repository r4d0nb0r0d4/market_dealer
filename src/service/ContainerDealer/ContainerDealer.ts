import { Express } from 'express';

import ExpressServer from '__modules/ExpressServer';

import ContainerDealerRouter from '__routes/ContainerDealerRouter';

const server = ExpressServer({ port: '3001' });

const serverMiddleware = (app: Express) => {
  app.use(ContainerDealerRouter);
};

server.init(serverMiddleware);
