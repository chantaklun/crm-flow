export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  avatarUrl: string; // Using placeholder URLs
  revenue: number;
  expenses: number;
  // Profit will be calculated: revenue - expenses
  industry?: string;
  website?: string;
  address?: string;
  annualRevenue?: number;
  employeeCount?: number;
  accountType?: 'prospect' | 'customer' | 'partner' | 'competitor';
}

export interface Appointment {
  id: string;
  title: string;
  date: Date;
  customerId?: string;
  customerName?: string; 
  description?: string;
  startTime?: string;
  endTime?: string;
}

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
  dueDate?: Date;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  title?: string;
  source: 'website' | 'referral' | 'advertisement' | 'social-media' | 'trade-show' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'unqualified';
  rating: 'hot' | 'warm' | 'cold';
  estimatedValue?: number;
  notes?: string;
  createdAt: Date;
}

export interface Opportunity {
  id: string;
  name: string;
  accountId: string;
  accountName: string;
  value: number;
  stage: 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  probability: number; // 0-100
  expectedCloseDate: Date;
  description?: string;
  contactName?: string;
  createdAt: Date;
  closedAt?: Date;
}

export interface Case {
  id: string;
  title: string;
  customerId: string;
  customerName: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'new' | 'in-progress' | 'waiting' | 'resolved' | 'closed';
  category: 'technical' | 'billing' | 'general' | 'complaint' | 'request';
  description: string;
  createdAt: Date;
  resolvedAt?: Date;
  assignedTo?: string;
}
