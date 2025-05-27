import type { Customer, Appointment, Todo } from './types';

export const dummyCustomers: Customer[] = [
  {
    id: '1',
    name: 'Alice Wonderland',
    email: 'alice@example.com',
    phone: '555-0101',
    company: 'Wonderland Inc.',
    avatarUrl: 'https://placehold.co/100x100/A779E9/FFFFFF.png?text=AW',
    revenue: 12000,
    expenses: 3000,
  },
  {
    id: '2',
    name: 'Bob The Builder',
    email: 'bob@example.com',
    phone: '555-0102',
    company: 'Builders Co.',
    avatarUrl: 'https://placehold.co/100x100/667EEA/FFFFFF.png?text=BB',
    revenue: 25000,
    expenses: 10000,
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    phone: '555-0103',
    company: 'Peanuts LLC',
    avatarUrl: 'https://placehold.co/100x100/FBBF24/FFFFFF.png?text=CB',
    revenue: 8000,
    expenses: 2500,
  },
  {
    id: '4',
    name: 'Diana Prince',
    email: 'diana@example.com',
    phone: '555-0104',
    company: 'Themyscira Solutions',
    avatarUrl: 'https://placehold.co/100x100/EF4444/FFFFFF.png?text=DP',
    revenue: 30000,
    expenses: 7000,
  },
  {
    id: '5',
    name: 'Edward Scissorhands',
    email: 'edward@example.com',
    phone: '555-0105',
    company: 'Artful Cuts',
    avatarUrl: 'https://placehold.co/100x100/3B82F6/FFFFFF.png?text=ES',
    revenue: 15000,
    expenses: 4500,
  },
];

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);
const yesterday = new Date(today);
yesterday.setDate(today.getDate() -1);


export const dummyAppointments: Appointment[] = [
  {
    id: 'apt1',
    title: 'Meeting with Alice',
    date: today,
    customerId: '1',
    customerName: 'Alice Wonderland',
    description: 'Discuss project proposal.',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 'apt2',
    title: 'Call with Bob',
    date: today,
    customerId: '2',
    customerName: 'Bob The Builder',
    description: 'Follow up on construction plan.',
    startTime: '14:00',
    endTime: '14:30',
  },
  {
    id: 'apt3',
    title: 'Project Kickoff - Charlie',
    date: tomorrow,
    customerId: '3',
    customerName: 'Charlie Brown',
    description: 'Initial project discussion.',
    startTime: '09:00',
    endTime: '10:00',
  },
  {
    id: 'apt4',
    title: 'Strategy Session - Diana',
    date: nextWeek,
    customerId: '4',
    customerName: 'Diana Prince',
    description: 'Plan Q3 marketing strategy.',
    startTime: '11:00',
    endTime: '12:30',
  },
  {
    id: 'apt5',
    title: 'Design Review - Edward',
    date: yesterday,
    customerId: '5',
    customerName: 'Edward Scissorhands',
    description: 'Review latest design mockups.',
    startTime: '15:00',
    endTime: '16:00',
  },
];

export const dummyTodos: Todo[] = [
  { id: 'todo1', task: 'Follow up with Alice', completed: false, dueDate: tomorrow },
  { id: 'todo2', task: 'Prepare presentation for Bob', completed: true, dueDate: today },
  { id: 'todo3', task: 'Send invoice to Charlie', completed: false },
  { id: 'todo4', task: 'Research new CRM features', completed: false, dueDate: nextWeek },
  { id: 'todo5', task: 'Update website portfolio', completed: true },
];
