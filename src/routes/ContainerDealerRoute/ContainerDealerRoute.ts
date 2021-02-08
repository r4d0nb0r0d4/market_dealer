import { Router } from 'express';

import { homeController } from '__controllers/ContainerDealerController';

const ContainerDealerRoute = Router();

ContainerDealerRoute.get('/', homeController);

export default ContainerDealerRoute;
