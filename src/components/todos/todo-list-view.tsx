"use client";

import React, { useState, useEffect } from "react";
import type { Todo } from "@/lib/types";
import { TodoItem } from "./todo-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle } from "lucide-react";

interface TodoListViewProps {
  initialTodos: Todo[];
}

export function TodoListView({ initialTodos }: TodoListViewProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTask, setNewTask] = useState("");

  // Hydration safety for localStorage
  useEffect(() => {
    const storedTodos = localStorage.getItem("bizflow_todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos).map((t: any) => ({
          ...t,
          dueDate: t.dueDate ? new Date(t.dueDate) : undefined,
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Failed to parse todos from localStorage", error);
        // Fallback to initialTodos if parsing fails
        setTodos(initialTodos);
        localStorage.setItem("bizflow_todos", JSON.stringify(initialTodos));
      }
    } else {
      // If no todos in local storage, use initial and save them
      setTodos(initialTodos);
      localStorage.setItem("bizflow_todos", JSON.stringify(initialTodos));
    }
  }, [initialTodos]); // Depend on initialTodos to re-init if it changes (though unlikely for this prop)


  useEffect(() => {
    // Check if window is defined ensures this runs only on client-side
    if (typeof window !== "undefined") {
       localStorage.setItem("bizflow_todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now().toString(), // Simple unique ID
      task: newTask.trim(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setNewTask("");
  };

  const handleToggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pendingTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <Card className="shadow-lg" data-ai-hint="task checklist">
      <CardHeader>
        <CardTitle>To-Do List</CardTitle>
        <CardDescription>Stay organized and keep track of your tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <Input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow"
            aria-label="New task input"
          />
          <Button type="submit" aria-label="Add task">
            <PlusCircle className="h-4 w-4 mr-2" /> Add Task
          </Button>
        </form>

        <ScrollArea className="h-[400px] pr-3">
          {pendingTodos.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Pending</h3>
              <div className="space-y-2">
                {pendingTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDeleteTodo}
                  />
                ))}
              </div>
            </div>
          )}

          {completedTodos.length > 0 && (
             <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Completed</h3>
              <div className="space-y-2">
                {completedTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDeleteTodo}
                  />
                ))}
              </div>
            </div>
          )}
          
          {todos.length === 0 && (
             <div className="text-center py-8 text-muted-foreground">
                No tasks yet. Add one above!
             </div>
          )}

        </ScrollArea>
      </CardContent>
    </Card>
  );
}
