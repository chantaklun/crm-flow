import { CaseTable } from "@/components/cases/case-table";
import { PageHeader } from "@/components/shared/page-header";
import { dummyCases } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function CasesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Cases"
        description="Manage customer service cases and support tickets."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Case
          </Button>
        }
      />
      <CaseTable cases={dummyCases} />
    </div>
  );
}
