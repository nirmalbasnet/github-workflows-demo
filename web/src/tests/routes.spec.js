import request from 'supertest';
import { startServer } from '../../server.js';

let app;

beforeAll(async () => {
  app = await startServer(8080); // Start the server before tests
});

afterAll(() => {
  app.close(); // Close the server after tests
});

describe('Base Endpoint', () => {
  it('should return status 200 as success', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Users Endpoint', () => {
  it('should return a status 200 by user URL', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toEqual(200);
  });

  it('should return a status 200 by user by id URL', async () => {
    const res = await request(app).get('/user/1');
    expect(res.statusCode).toEqual(200);
  });
});

test('URL Not Found', async () => {
  const res = await request(app).get('/hello');
  expect(res.statusCode).toEqual(404);
});
