"use client";

import { useState } from "react";
import NewTodoForm from "./_components/new-todo-form";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";

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
              key={index}
              index={`${index}`}
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
              onRemove={() => {
                setTodos((prev) => {
                  const newTodos = [...prev].filter((_, i) => i !== index);
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
  index,
  title,
  description,
  completed,
  onCompleteChanged,
  onRemove,
}: {
  index: string;
  title: string;
  description: string;
  completed: boolean;
  onCompleteChanged: (newValue: boolean) => void;
  onRemove: () => void;
}) {
  return (
    <li className="flex gap-2 border rounded p-2 items-center w-full">
      <Checkbox
        id={index}
        checked={completed}
        onCheckedChange={(checked: boolean) => onCompleteChanged(checked)}
      ></Checkbox>
      <div>
        <Label htmlFor={index}>
          <p className="font-semibold">{title}</p>
        </Label>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="ml-auto">
        <Button
          className="bg-red-500 hover:bg-red-700"
          onClick={() => onRemove()}
        >
          Remove
        </Button>
      </div>
    </li>
  );
}
