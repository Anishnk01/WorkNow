export interface AuthUser {
  id: string;
  email: string;
  fullName?: string;
  avatar?: string;
  phone?: string;
  city?: string;
  role?: 'CUSTOMER' | 'WORKER' | 'ADMIN';
  createdAt?: Date;
}

export interface CompleteProfileData {
  fullName: string;
  phone: string;
  city: string;
  role: 'CUSTOMER' | 'WORKER';
  bio?: string;
  experience?: string;
  hourlyRate?: number;
}

export interface OTPResponse {
  success: boolean;
  message: string;
  sessionId?: string;
}

export interface WorkerProfileData {
  bio: string;
  experience: string;
  hourlyRate: number;
  categories: string[];
}
