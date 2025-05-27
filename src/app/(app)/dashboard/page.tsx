import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarClock, ListTodo } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { dummyCustomers, dummyAppointments, dummyTodos } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const totalCustomers = dummyCustomers.length;
  const upcomingAppointments = dummyAppointments.filter(
    (apt) => apt.date >= new Date()
  ).length;
  const pendingTodos = dummyTodos.filter((todo) => !todo.completed).length;

  const summaryCards = [
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: Users,
      href: "/customers",
      aiHint: "customer data",
    },
    {
      title: "Upcoming Appointments",
      value: upcomingAppointments,
      icon: CalendarClock,
      href: "/appointments",
      aiHint: "schedule event",
    },
    {
      title: "Pending To-Do's",
      value: pendingTodos,
      icon: ListTodo,
      href: "/todos",
      aiHint: "task item",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Welcome to BizFlow! Here's an overview of your business."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaryCards.map((cardItem) => (
          <Card key={cardItem.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300" data-ai-hint={cardItem.aiHint}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {cardItem.title}
              </CardTitle>
              <cardItem.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{cardItem.value}</div>
              <Link href={cardItem.href} passHref legacyBehavior>
                <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground hover:text-primary">
                  View Details &rarr;
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-lg" data-ai-hint="recent activity">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity to display.</p>
            {/* Placeholder for recent activity feed */}
          </CardContent>
        </Card>
        <Card className="shadow-lg" data-ai-hint="quick actions">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Button variant="outline" asChild>
              <Link href="/customers">Add New Customer</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/appointments">Schedule Appointment</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/todos">Create To-Do</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
