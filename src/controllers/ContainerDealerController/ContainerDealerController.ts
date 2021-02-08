import { Request, Response } from 'express';

import { BaseController } from '__types/controllers';

export const homeController: BaseController = (_request: Request, response: Response) => {
  response.send('Server is ready');
};
