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
