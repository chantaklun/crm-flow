import { LeadTable } from "@/components/leads/lead-table";
import { PageHeader } from "@/components/shared/page-header";
import { dummyLeads } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function LeadsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Leads"
        description="Manage potential customers and track lead conversion."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Lead
          </Button>
        }
      />
      <LeadTable leads={dummyLeads} />
    </div>
  );
}
