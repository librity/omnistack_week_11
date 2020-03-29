import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

class NGOsController {
  async index(req, res) {
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);
  }

  async create(req, res) {
    const { name, email, whatsapp, city, state } = req.body;

    const id = generateUniqueId();

    await connection('ngos').insert({ id, name, email, whatsapp, city, state });

    return res.json({ id });
  }
}

export default new NGOsController();
