"use client";

import React, { useState, useMemo } from "react";
import type { Appointment } from "@/lib/types";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format, isSameDay, parseISO } from "date-fns";

interface AppointmentCalendarViewProps {
  appointments: Appointment[];
}

export function AppointmentCalendarView({ appointments }: AppointmentCalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const appointmentsByDate = useMemo(() => {
    const grouped: Record<string, Appointment[]> = {};
    appointments.forEach((apt) => {
      const dateKey = format(apt.date, "yyyy-MM-dd");
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(apt);
    });
    return grouped;
  }, [appointments]);

  const selectedDayAppointments = useMemo(() => {
    if (!selectedDate) return [];
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    return appointmentsByDate[dateKey] || [];
  }, [selectedDate, appointmentsByDate]);

  const appointmentDays = Object.keys(appointmentsByDate).map(dateStr => parseISO(dateStr));

  const modifiers = {
    highlighted: appointmentDays,
  };
  const modifiersStyles = {
    highlighted: {
      border: "2px solid hsl(var(--primary))",
      borderRadius: 'var(--radius)',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2 shadow-lg" data-ai-hint="event scheduler">
        <CardHeader>
          <CardTitle>Appointment Calendar</CardTitle>
          <CardDescription>Select a day to view appointments.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            ISOWeek
          />
        </CardContent>
      </Card>

      <Card className="md:col-span-1 shadow-lg h-fit" data-ai-hint="daily agenda">
        <CardHeader>
          <CardTitle>
            {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Select a date"}
          </CardTitle>
          <CardDescription>
            {selectedDayAppointments.length > 0
              ? `${selectedDayAppointments.length} appointment(s)`
              : "No appointments for this day."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-3">
            {selectedDayAppointments.length > 0 ? (
              <ul className="space-y-3">
                {selectedDayAppointments.map((apt) => (
                  <li key={apt.id} className="p-3 rounded-md border bg-card hover:bg-accent/50 transition-colors">
                    <h4 className="font-semibold text-sm">{apt.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {apt.customerName && `With: ${apt.customerName}`}
                    </p>
                    {apt.startTime && apt.endTime && (
                       <p className="text-xs text-muted-foreground">
                         Time: {apt.startTime} - {apt.endTime}
                       </p>
                    )}
                    {apt.description && (
                      <p className="text-xs mt-1">{apt.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                Select a day on the calendar to see appointments.
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
