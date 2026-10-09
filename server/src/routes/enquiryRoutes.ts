import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { EnquiryController } from '../controllers/enquiryController.js';

const router = Router();

// Rate limiter for enquiry submissions: max 10 requests per 15 minutes per IP
const enquiryLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number(process.env.ENQUIRY_RATE_LIMIT_MAX) || 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiry submissions from this network. Please wait a few minutes or call us directly at +91 97464 03622.',
  },
});

// POST /api/enquiries - Submit a new project enquiry
router.post('/', enquiryLimiter, EnquiryController.submitEnquiry);

// GET /api/enquiries - Admin inspection endpoint
router.get('/', EnquiryController.getEnquiries);

export default router;
