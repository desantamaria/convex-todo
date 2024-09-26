"use client";

import { useState } from "react";
import { Checkbox } from "../components/ui/Checkbox";
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
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[60vw] flex flex-col gap-5">
        <h1 className="text-xl font-bold">To-Do List</h1>
        <ul className="space-y-2">
          {todos.map(({ title, description, completed }, index) => (
            <ToDoItem
              title={title}
              description={description}
              completed={completed}
              onCompleteChanged={(newValue) => {
                setTodos((prev) => {
                  const newTodos = [...prev];
                  newTodos[index].completed = newValue;
                  return newTodos;
                });
              }}
            />
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
    </div>
  );
}

function ToDoItem({
  title,
  description,
  completed,
  onCompleteChanged,
}: {
  title: string;
  description: string;
  completed: boolean;
  onCompleteChanged: (newValue: boolean) => void;
}) {
  return (
    <li className="flex gap-2 border rounded p-2 items-center">
      <Checkbox
        checked={completed}
        onCheckedChange={(checked: boolean) => onCompleteChanged(checked)}
      ></Checkbox>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </li>
  );
}
