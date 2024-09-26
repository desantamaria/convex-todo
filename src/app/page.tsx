"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

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
    <div className="max-h-screen-md mx-auto p-4">
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
      <form></form>
    </div>
  );
}
