export interface EnquiryInput {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceCategory: string;
  preferredTech?: string;
  projectBudget?: string;
  projectDescription: string;
  urgency?: 'critical' | 'standard' | 'planned';
}

export interface EnquiryRecord extends EnquiryInput {
  id: string;
  status: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'CLOSED';
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}
