import express, { Express } from 'express';
import { TExpressServerConstructor, TInit } from '__modules/ExpressServer/types';
import { TCallback } from '__utils';
import ConsoleMessage from '__modules/ConsoleMessage/ConsoleMessage';

const PORT = process.env.PORT || 3000;

const ExpressServer: TExpressServerConstructor = () => {
  let app: Express | null = null;

  const init: TInit = (cb?: TCallback) => {
    if (app !== null) {
      ConsoleMessage.warning('SERVER IS ALREADY STARTED');
      return;
    }

    ConsoleMessage.text('START TO INIT SERVER');

    app = express();

    if (cb !== undefined) {
      cb();
    }

    app.listen(PORT, () => {
      ConsoleMessage.good(`SERVER HAS BEEN STARTED ON PORT ${PORT}`);
    });
  };

  return {
    init,
  };
};

export default ExpressServer;
