import { Router } from 'express';
import crypto from 'crypto';

import connection from './database/connection';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    application: 'Be the Hero',
    event: 'RocketSeat - Semana Omnistack 11',
    message: 'Hello World',
  });
});

routes.post('/ngos', async (req, res) => {
  const { name, email, whatsapp, city, state } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ngos').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    state,
  });

  return res.json({
    id,
  });
});

export default routes;
