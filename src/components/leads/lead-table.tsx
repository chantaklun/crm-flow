"use client";

import { Lead } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LeadTableProps {
  leads: Lead[];
}

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  unqualified: "bg-gray-100 text-gray-800",
};

const ratingColors = {
  hot: "bg-red-100 text-red-800",
  warm: "bg-orange-100 text-orange-800",
  cold: "bg-slate-100 text-slate-800",
};

export function LeadTable({ leads }: LeadTableProps) {
  return (
    <Card className="shadow-lg">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Est. Value</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{lead.company}</div>
                    {lead.title && (
                      <div className="text-sm text-muted-foreground">
                        {lead.title}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {lead.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {lead.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {lead.source.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[lead.status]}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={ratingColors[lead.rating]}>
                    {lead.rating}
                  </Badge>
                </TableCell>
                <TableCell>
                  {lead.estimatedValue
                    ? `$${lead.estimatedValue.toLocaleString()}`
                    : "-"}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
