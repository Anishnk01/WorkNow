export type UserRole = 'CUSTOMER' | 'WORKER' | 'ADMIN';
export type JobStatus = 'OPEN' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
export type ProposalStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';
export type NotificationType = 'JOB_POSTED' | 'PROPOSAL_RECEIVED' | 'JOB_ACCEPTED' | 'JOB_COMPLETED' | 'PAYMENT_RECEIVED' | 'NEW_MESSAGE' | 'REVIEW_RECEIVED';

export interface User {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  avatar: string | null;
  role: UserRole;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  status: JobStatus;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  radius: number;
  createdById: string;
  acceptedById: string | null;
  scheduledFor: Date | null;
  completedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkerProfile {
  id: string;
  userId: string;
  rating: number;
  totalJobs: number;
  totalEarnings: number;
  verified: boolean;
  skills: string[];
  categories: string[];
  hourlyRate: number;
  latitude: number;
  longitude: number;
  city: string;
  maxDistance: number;
  isAvailable: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: Date;
}
