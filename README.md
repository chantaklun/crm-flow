# CRM Application

This is a Next.js-based Customer Relationship Management (CRM) application inspired by Microsoft Dynamics 365. It provides comprehensive tools for managing customer relationships, sales opportunities, support cases, and business workflows.

## Features

### Core Modules

*   **Dashboard:** Provides an overview of key business metrics including customers, leads, opportunities, appointments, cases, and tasks.
*   **Customer Management:** Manage customer accounts with detailed profiles including industry, revenue, and contact information.
*   **Lead Management:** Track potential customers from initial contact through qualification with status, rating, and source tracking.
*   **Opportunities/Sales Pipeline:** Visual pipeline management for sales deals with stages, probability tracking, and forecasting.
*   **Appointment Scheduling:** Schedule and manage appointments with customers and leads.
*   **Cases/Support Tickets:** Professional customer service management with priority levels, status tracking, and categorization.
*   **Todo List:** Task management to track and organize work items.

### Key Capabilities

*   **Visual Sales Pipeline:** Kanban-style board showing opportunities at each stage (Qualification, Proposal, Negotiation, Won/Lost)
*   **Lead Conversion Tracking:** Monitor leads from prospect to customer with ratings (hot, warm, cold)
*   **Support Ticket Management:** Comprehensive case management with priority levels (low, medium, high, critical)
*   **Rich Data Models:** Enterprise-grade customer profiles with industry, website, annual revenue, and employee count
*   **Dual View Options:** Pipeline board and table views for opportunities
*   **Color-Coded Badges:** Visual status indicators throughout the application

## Getting Started

To get started with the application, explore the main page at `src/app/page.tsx`.

## Project Structure

The project is organized as follows:

*   `src/app/`: Contains the main application pages and layouts.
    *   `(app)/`: Houses the core feature modules:
        *   `dashboard/`: Business overview and key metrics
        *   `customers/`: Customer account management
        *   `leads/`: Lead tracking and qualification
        *   `opportunities/`: Sales pipeline and deal management
        *   `appointments/`: Appointment scheduling
        *   `cases/`: Customer support ticket system
        *   `todos/`: Task management
*   `src/components/`: Includes reusable UI components categorized by feature and shared elements.
*   `src/hooks/`: Custom React hooks used throughout the application.
*   `src/lib/`: Utility functions, data handling, and type definitions.

## Technology Stack

*   **Framework:** Next.js 15 with React 18
*   **Styling:** Tailwind CSS with custom component library
*   **UI Components:** Radix UI primitives
*   **Icons:** Lucide React
*   **Type Safety:** TypeScript
*   **Date Handling:** date-fns

## Comparison to Microsoft Dynamics 365

This CRM provides functionality similar to commercial solutions:

| Feature | This CRM | Dynamics 365 |
|---------|----------|--------------|
| Lead Management | ✅ | ✅ |
| Opportunity Pipeline | ✅ | ✅ |
| Customer Accounts | ✅ | ✅ |
| Service Cases | ✅ | ✅ |
| Activity Management | ✅ | ✅ |
| Dashboard Analytics | ✅ | ✅ |
