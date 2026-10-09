import { Request, Response } from 'express';
import { enquirySchema } from '../validators/enquiryValidator.js';
import { StorageService } from '../services/storageService.js';
import { EmailService } from '../services/emailService.js';
import { ApiResponse } from '../types/index.js';

export class EnquiryController {
  public static async submitEnquiry(req: Request, res: Response): Promise<void> {
    try {
      // 1. Validate Input Payload using Zod
      const parseResult = enquirySchema.safeParse(req.body);

      if (!parseResult.success) {
        const formattedErrors: Record<string, string[]> = {};
        parseResult.error.errors.forEach((err) => {
          const field = err.path.join('.') || 'general';
          if (!formattedErrors[field]) {
            formattedErrors[field] = [];
          }
          formattedErrors[field].push(err.message);
        });

        res.status(400).json({
          success: false,
          message: 'Validation failed. Please correct the highlighted errors.',
          errors: formattedErrors,
        } as ApiResponse);
        return;
      }

      const validatedData = parseResult.data;
      const ipAddress = req.ip || req.socket.remoteAddress;
      const userAgent = req.get('user-agent');

      // 2. Persist in Storage
      const record = await StorageService.createEnquiry(
        validatedData,
        ipAddress,
        userAgent
      );

      // 3. Dispatch Email Notification (Asynchronous)
      EmailService.sendEnquiryNotification(record).catch((err) =>
        console.error('[EnquiryController] Background email dispatch error:', err)
      );

      // 4. Return Success Response
      res.status(201).json({
        success: true,
        message: 'Your enquiry has been successfully received. A senior engineer will review your requirements and reach out promptly.',
        data: {
          enquiryId: record.id,
          createdAt: record.createdAt,
          fullName: record.fullName,
          serviceCategory: record.serviceCategory,
        },
      } as ApiResponse);
    } catch (err: any) {
      console.error('[EnquiryController] Unexpected error in submitEnquiry:', err);
      res.status(500).json({
        success: false,
        message: 'An unexpected server error occurred while processing your request. Please try again or contact us directly via WhatsApp / Phone.',
      } as ApiResponse);
    }
  }

  public static async getEnquiries(req: Request, res: Response): Promise<void> {
    try {
      const apiKey = req.headers['x-admin-key'];
      const expectedKey = process.env.ADMIN_API_KEY;

      if (expectedKey && apiKey !== expectedKey) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized. Valid admin API key required.',
        } as ApiResponse);
        return;
      }

      const enquiries = await StorageService.getAllEnquiries();
      res.status(200).json({
        success: true,
        message: 'Enquiries retrieved successfully',
        data: enquiries,
      } as ApiResponse);
    } catch (err: any) {
      console.error('[EnquiryController] Error in getEnquiries:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve enquiries',
      } as ApiResponse);
    }
  }
}
