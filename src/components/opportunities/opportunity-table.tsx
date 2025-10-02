"use client";

import { Opportunity } from "@/lib/types";
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

interface OpportunityTableProps {
  opportunities: Opportunity[];
}

const stageColors = {
  qualification: "bg-blue-100 text-blue-800",
  proposal: "bg-purple-100 text-purple-800",
  negotiation: "bg-orange-100 text-orange-800",
  "closed-won": "bg-green-100 text-green-800",
  "closed-lost": "bg-gray-100 text-gray-800",
};

export function OpportunityTable({ opportunities }: OpportunityTableProps) {
  return (
    <Card className="shadow-lg">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opportunity Name</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Probability</TableHead>
              <TableHead>Expected Close</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {opportunities.map((opp) => (
              <TableRow key={opp.id}>
                <TableCell className="font-medium">{opp.name}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{opp.accountName}</div>
                    {opp.contactName && (
                      <div className="text-sm text-muted-foreground">
                        {opp.contactName}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  ${opp.value.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge className={stageColors[opp.stage]}>
                    {opp.stage.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${opp.probability}%` }}
                      />
                    </div>
                    <span className="text-sm">{opp.probability}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  {format(new Date(opp.expectedCloseDate), "MMM dd, yyyy")}
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
