import { Router } from 'express';

import RootController from './controllers/RootController';
import SessionsController from './controllers/SessionsController';
import NGOsController from './controllers/NGOsController';
import IncidentsController from './controllers/IncidentsController';
import ProfilesController from './controllers/ProfilesController';

const routes = Router();

routes.get('/', RootController.test);

routes.get('/sessions', SessionsController.create);

routes.get('/ngos', NGOsController.index);
routes.post('/ngos', NGOsController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.destroy);

routes.get('/profiles', ProfilesController.index);

export default routes;
