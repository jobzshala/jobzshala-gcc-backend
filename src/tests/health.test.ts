import request from 'supertest';

import app from '../app';

describe('Health API', () => {

  it('should return api running', async () => {

    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);

  });

});