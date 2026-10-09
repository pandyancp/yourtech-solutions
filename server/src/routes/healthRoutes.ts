import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/health - Health check endpoint
router.get('/', (req: Request, res: Response) => {
  const uptimeSeconds = process.uptime();
  const memoryUsage = process.memoryUsage();

  res.status(200).json({
    status: 'healthy',
    service: 'YourTech Solutions API',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(uptimeSeconds)}s`,
    environment: process.env.NODE_ENV || 'development',
    memory: {
      rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
    },
  });
});

export default router;
