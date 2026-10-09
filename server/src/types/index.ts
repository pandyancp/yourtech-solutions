export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
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
