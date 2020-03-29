import request from 'supertest';
import connection from '../../src/database/connection';
import App from '../../src/app';

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new NGO', async () => {
    const response = await request(App)
      .post('/ngos')
      .send({
        name: 'PETA',
        email: 'test@gmail.com',
        whatsapp: '1100000000',
        city: 'Sao Paulo',
        state: 'SP',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
