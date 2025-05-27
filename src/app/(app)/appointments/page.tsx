import { AppointmentCalendarView } from "@/components/appointments/appointment-calendar-view";
import { PageHeader } from "@/components/shared/page-header";
import { dummyAppointments } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Appointments"
        description="Manage your schedule and appointments."
         actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Appointment
          </Button>
        }
      />
      <AppointmentCalendarView appointments={dummyAppointments} />
    </div>
  );
}
