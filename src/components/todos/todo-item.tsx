"use client";

import type { Todo } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggleComplete, onDelete }: TodoItemProps) {
  return (
    <div className={cn(
      "flex items-center justify-between p-3 rounded-md border transition-all duration-200",
      todo.completed ? "bg-muted/50" : "bg-card hover:bg-accent/50"
    )}>
      <div className="flex items-center gap-3">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggleComplete(todo.id)}
          aria-label={`Mark ${todo.task} as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        <div>
          <label
            htmlFor={`todo-${todo.id}`}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              todo.completed ? "line-through text-muted-foreground" : "text-foreground"
            )}
          >
            {todo.task}
          </label>
          {todo.dueDate && (
            <p className={cn(
              "text-xs",
              todo.completed ? "text-muted-foreground/80 line-through" : "text-muted-foreground"
            )}>
              Due: {format(todo.dueDate, "MMM d, yyyy")}
            </p>
          )}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-destructive"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete task: ${todo.task}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
