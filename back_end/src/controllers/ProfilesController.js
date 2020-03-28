import connection from '../database/connection';

class ProfilesController {
  async index(req, res) {
    const ngo_id = req.headers.authorization;

    if (!ngo_id) return res.status(400).json({ error: 'NGO not found.' });

    const incidents = await connection('incidents')
      .where('ngo_id', ngo_id)
      .select('*');

    return res.json({ incidents });
  }
}

export default new ProfilesController();
