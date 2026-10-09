import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('API Health & Diagnostics', () => {
  it('GET /api/health returns 200 and healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.service).toContain('YourTech Solutions');
  });
});

describe('Enquiry API - Validation & Submission', () => {
  it('POST /api/enquiries with valid payload creates an enquiry record', async () => {
    const payload = {
      name: 'Vikram Mehta',
      email: 'vikram.mehta@enterprise.com',
      phone: '+91 98765 43210',
      service: 'DevOps & CI/CD Services',
      message: 'We need automated CI/CD pipeline setup for our AWS servers.',
    };

    const res = await request(app)
      .post('/api/enquiries')
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('enquiryId');
    expect(res.body.data.name).toBe('Vikram Mehta');
  });

  it('POST /api/enquiries with missing fields returns 400 with errors', async () => {
    const invalidPayload = {
      name: '',
      email: 'bad-email',
      phone: '',
      service: '',
      message: '',
    };

    const res = await request(app)
      .post('/api/enquiries')
      .send(invalidPayload);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body).toHaveProperty('errors');
  });
});
