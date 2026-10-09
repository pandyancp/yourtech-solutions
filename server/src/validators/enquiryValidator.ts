import { z } from 'zod';

export const serviceCategoryEnum = z.enum([
  'Frontend & Web Application Development',
  'Backend & API Development',
  'SQL & Database Services',
  'DevOps & CI/CD Services',
  'Docker, Kubernetes & Containers',
  'Cloud Infrastructure & IaC',
  'System Administration, Networking & Security',
  'Other / Custom IT Consultation'
]);

export const urgencyEnum = z.enum(['critical', 'standard', 'planned']);

export const enquirySchema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .trim()
    .min(2, 'Full name must be at least 2 characters long')
    .max(100, 'Full name cannot exceed 100 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(150, 'Email cannot exceed 150 characters'),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .min(7, 'Phone number must be at least 7 digits')
    .max(25, 'Phone number cannot exceed 25 characters')
    .regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/, 'Please enter a valid phone number format'),
  companyName: z
    .string()
    .trim()
    .max(120, 'Company name cannot exceed 120 characters')
    .optional()
    .or(z.literal('')),
  serviceCategory: z
    .string({ required_error: 'Service category is required' })
    .min(2, 'Service category cannot be empty'),
  preferredTech: z
    .string()
    .trim()
    .max(150, 'Preferred technology cannot exceed 150 characters')
    .optional()
    .or(z.literal('')),
  projectBudget: z
    .string()
    .trim()
    .max(50, 'Project budget text cannot exceed 50 characters')
    .optional()
    .or(z.literal('')),
  projectDescription: z
    .string({ required_error: 'Project description is required' })
    .trim()
    .min(10, 'Project description must be at least 10 characters long')
    .max(3000, 'Project description cannot exceed 3000 characters'),
  urgency: urgencyEnum.optional().default('standard')
});

export type ValidatedEnquiry = z.infer<typeof enquirySchema>;
