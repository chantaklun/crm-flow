import { OpportunityPipeline } from "@/components/opportunities/opportunity-pipeline";
import { OpportunityTable } from "@/components/opportunities/opportunity-table";
import { PageHeader } from "@/components/shared/page-header";
import { dummyOpportunities } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Opportunities"
        description="Manage sales opportunities and track your pipeline."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Opportunity
          </Button>
        }
      />
      <Tabs defaultValue="pipeline" className="w-full">
        <TabsList>
          <TabsTrigger value="pipeline">Pipeline View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>
        <TabsContent value="pipeline" className="mt-6">
          <OpportunityPipeline opportunities={dummyOpportunities} />
        </TabsContent>
        <TabsContent value="table" className="mt-6">
          <OpportunityTable opportunities={dummyOpportunities} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
