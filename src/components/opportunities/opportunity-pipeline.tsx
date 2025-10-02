"use client";

import { Opportunity } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp } from "lucide-react";

interface OpportunityPipelineProps {
  opportunities: Opportunity[];
}

const stageConfig = {
  qualification: { label: "Qualification", color: "bg-blue-100 text-blue-800" },
  proposal: { label: "Proposal", color: "bg-purple-100 text-purple-800" },
  negotiation: { label: "Negotiation", color: "bg-orange-100 text-orange-800" },
  "closed-won": { label: "Closed Won", color: "bg-green-100 text-green-800" },
  "closed-lost": { label: "Closed Lost", color: "bg-gray-100 text-gray-800" },
};

export function OpportunityPipeline({ opportunities }: OpportunityPipelineProps) {
  const stages = ["qualification", "proposal", "negotiation", "closed-won", "closed-lost"] as const;

  const getOpportunitiesByStage = (stage: Opportunity["stage"]) => {
    return opportunities.filter((opp) => opp.stage === stage);
  };

  const getStageTotal = (stage: Opportunity["stage"]) => {
    return getOpportunitiesByStage(stage).reduce((sum, opp) => sum + opp.value, 0);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stages.map((stage) => {
        const stageOpps = getOpportunitiesByStage(stage);
        const stageTotal = getStageTotal(stage);
        const config = stageConfig[stage];

        return (
          <Card key={stage} className="shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">
                {config.label}
              </CardTitle>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">
                  ${(stageTotal / 1000).toFixed(0)}K
                </div>
                <Badge variant="secondary">{stageOpps.length}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {stageOpps.map((opp) => (
                <Card
                  key={opp.id}
                  className="p-3 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="font-medium text-sm line-clamp-2">
                      {opp.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {opp.accountName}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <DollarSign className="h-3 w-3" />
                        {(opp.value / 1000).toFixed(0)}K
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        {opp.probability}%
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              {stageOpps.length === 0 && (
                <div className="text-sm text-muted-foreground text-center py-4">
                  No opportunities
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
