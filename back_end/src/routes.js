import { Router } from 'express';

import RootController from './controllers/RootController';
import NGOsController from './controllers/NGOsController';

const routes = Router();

routes.get('/', RootController.test);

routes.get('/ngos', NGOsController.index);
routes.post('/ngos', NGOsController.create);

export default routes;
