import express, { Express } from 'express';
import { Options, TExpressServerConstructor, TInit } from '__modules/ExpressServer/types';
import { TCallback } from '__utils';
import ConsoleMessage from '__modules/ConsoleMessage/ConsoleMessage';

const PROCESS_PORT = process.env.PORT;

const ExpressServer: TExpressServerConstructor = (options?: Options) => {
  let app: Express | null = null;

  const port: string = PROCESS_PORT || options?.port || '3000';

  const init: TInit = (cb?: TCallback) => {
    if (app !== null) {
      ConsoleMessage.warning('SERVER IS ALREADY STARTED');
      return;
    }

    ConsoleMessage.text('START TO INIT SERVER');

    app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (cb !== undefined) {
      cb(app);
    }

    app.listen(port, () => {
      ConsoleMessage.good(`SERVER HAS BEEN STARTED ON PORT ${port}`);
    });
  };

  return {
    init,
  };
};

export default ExpressServer;
