import express, { Express } from 'express';

// import { PROCESS_PORT } from '__constants/ports';

import ConsoleMessage from '__modules/ConsoleMessage';
import { TCallback, TExpressServerConstructor, TInit } from '__modules/ExpressServer/types';

const ExpressServer: TExpressServerConstructor = () => {
  let app: Express | null = null;

  // @ts-ignore
  const port: string = process.env.PORT || 3000;

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
      ConsoleMessage.success(`SERVER HAS BEEN STARTED ON PORT ${port}`);
    });
  };

  return {
    init,
  };
};

export default ExpressServer;
