import express, { Express } from 'express';

import { DEFAULT_PORT, PROCESS_PORT } from '__constants/ports';

import ConsoleMessage from '__modules/ConsoleMessage';
import { Options, TCallback, TExpressServerConstructor, TInit } from '__modules/ExpressServer/types';

const ExpressServer: TExpressServerConstructor = (options?: Options) => {
  let app: Express | null = null;

  const port: string = PROCESS_PORT || options?.port || DEFAULT_PORT;

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
