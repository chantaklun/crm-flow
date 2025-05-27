import { TodoListView } from "@/components/todos/todo-list-view";
import { PageHeader } from "@/components/shared/page-header";
import { dummyTodos } from "@/lib/data";

export default function TodosPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="To-Do List"
        description="Manage your tasks and stay productive."
      />
      {/* Pass initialTodos to seed the list if localStorage is empty */}
      <TodoListView initialTodos={dummyTodos} />
    </div>
  );
}
