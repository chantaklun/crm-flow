import { CustomerTable } from "@/components/customers/customer-table";
import { PageHeader } from "@/components/shared/page-header";
import { dummyCustomers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Customers"
        description="Manage your customer relationships and sales data."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Customer
          </Button>
        }
      />
      <CustomerTable customers={dummyCustomers} />
    </div>
  );
}
