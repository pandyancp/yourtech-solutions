import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('API Health & Diagnostics', () => {
  it('GET /api/health returns 200 and healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.service).toContain('YourTech Solutions');
    expect(res.body).toHaveProperty('uptime');
  });

  it('GET /api/unknown-endpoint returns 404', async () => {
    const res = await request(app).get('/api/unknown-endpoint');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });
});

describe('Enquiry API - Validation & Submission', () => {
  it('POST /api/enquiries with valid payload creates an enquiry record', async () => {
    const payload = {
      fullName: 'Vikram Mehta',
      email: 'vikram.mehta@enterprise.com',
      phone: '+91 98765 43210',
      companyName: 'Mehta Logistics Ltd',
      serviceCategory: 'DevOps & CI/CD Services',
      preferredTech: 'Jenkins, Docker, AWS, Terraform',
      projectBudget: '$5,000 - $15,000',
      projectDescription: 'We require an automated CI/CD pipeline on AWS with zero downtime.',
      urgency: 'standard',
    };

    const res = await request(app)
      .post('/api/enquiries')
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('enquiryId');
    expect(res.body.data.fullName).toBe('Vikram Mehta');
  });

  it('POST /api/enquiries with missing fields returns 400 with field errors', async () => {
    const invalidPayload = {
      fullName: '',
      email: 'invalid-email',
      phone: '',
      projectDescription: 'Short',
    };

    const res = await request(app)
      .post('/api/enquiries')
      .send(invalidPayload);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toHaveProperty('fullName');
    expect(res.body.errors).toHaveProperty('email');
    expect(res.body.errors).toHaveProperty('phone');
    expect(res.body.errors).toHaveProperty('projectDescription');
  });

  it('GET /api/enquiries returns list of records', async () => {
    const res = await request(app).get('/api/enquiries');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
