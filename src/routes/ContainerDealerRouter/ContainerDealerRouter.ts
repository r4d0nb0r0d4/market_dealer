import { Router, Request, Response } from 'express';

const ContainerDealerRouter = Router();

ContainerDealerRouter.get('/', (_request: Request, response: Response) => {
  response.send('Server is ready');
});

export default ContainerDealerRouter;
