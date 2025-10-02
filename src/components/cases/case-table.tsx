"use client";

import { Case } from "@/lib/types";
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
import { Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface CaseTableProps {
  cases: Case[];
}

const priorityColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange-100 text-orange-800",
  critical: "bg-red-100 text-red-800",
};

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  "in-progress": "bg-purple-100 text-purple-800",
  waiting: "bg-yellow-100 text-yellow-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
};

export function CaseTable({ cases }: CaseTableProps) {
  return (
    <Card className="shadow-lg">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((caseItem) => (
              <TableRow key={caseItem.id}>
                <TableCell className="font-mono text-sm">
                  #{caseItem.id.toUpperCase()}
                </TableCell>
                <TableCell className="font-medium max-w-xs">
                  <div className="line-clamp-2">{caseItem.title}</div>
                </TableCell>
                <TableCell>{caseItem.customerName}</TableCell>
                <TableCell>
                  <Badge className={priorityColors[caseItem.priority]}>
                    {caseItem.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[caseItem.status]}>
                    {caseItem.status.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {caseItem.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  {format(new Date(caseItem.createdAt), "MMM dd, yyyy")}
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
