import { z } from 'zod';

export const enquirySchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(150, 'Email cannot exceed 150 characters'),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .min(7, 'Phone number must be at least 7 digits')
    .max(25, 'Phone number cannot exceed 25 characters'),
  service: z
    .string({ required_error: 'Please select a service' })
    .min(2, 'Service cannot be empty'),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(5, 'Message must be at least 5 characters long')
    .max(3000, 'Message cannot exceed 3000 characters'),
});

export type ValidatedEnquiry = z.infer<typeof enquirySchema>;
