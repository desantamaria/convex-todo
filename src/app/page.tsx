"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import NewTodoForm from "./_components/new-todo-form";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<ToDoItem[]>([
    { title: "Example", description: "This is an example", completed: false },
  ]);

  return (
    <div className="h-screen mx-auto p-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <ul>
        {todos.map(({ title, description, completed }, index) => (
          <li key={index}>
            <Checkbox
              checked={completed}
              onCheckedChange={(checked: boolean) =>
                setTodos((prev) => {
                  const newTodos = [...prev];
                  newTodos[index].completed = checked;
                  return newTodos;
                })
              }
            ></Checkbox>
            <span className="font-semibold">{title}</span>
            {description}
          </li>
        ))}
      </ul>
      <NewTodoForm
        onCreate={(title, description) => {
          setTodos((prev) => {
            const newTodos = [...prev];
            newTodos.push({ title, description, completed: false });
            return newTodos;
          });
        }}
      />
    </div>
  );
}

// function ToDoItem({title, description, complete, onCompleteChanged})
