import { Router } from 'express';

import RootController from './controllers/RootController';
import SessionsController from './controllers/SessionsController';
import NGOsController from './controllers/NGOsController';
import IncidentsController from './controllers/IncidentsController';
import ProfilesController from './controllers/ProfilesController';

import AuthenticationValidator from './validators/AuthenticationValidator';
import SessionValidator from './validators/SessionValidator';
import NGOValidator from './validators/NGOValidator';
import IncidentValidator from './validators/IncidentValidator';

const routes = Router();

routes.get('/', RootController.test);

routes.post('/sessions', SessionValidator, SessionsController.create);

routes.get('/ngos', NGOsController.index);
routes.post('/ngos', NGOValidator, NGOsController.create);

routes.get('/incidents', IncidentValidator.index, IncidentsController.index);

routes.use(AuthenticationValidator);

routes.get('/profiles', ProfilesController.index);

routes.post('/incidents', IncidentValidator.create, IncidentsController.create);
routes.delete(
  '/incidents/:id',
  IncidentValidator.destroy,
  IncidentsController.destroy
);

export default routes;
