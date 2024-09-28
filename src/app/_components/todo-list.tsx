import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Checkbox } from "@/components/ui/Checkbox";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

export function ToDoList() {
  const todos = useQuery(api.functions.listTodos);
  return (
    <ul className="space-y-2">
      {todos?.map(({ _id, title, description, completed }, index) => (
        <ToDoItem
          key={index}
          id={_id}
          title={title}
          description={description}
          completed={completed}
        />
      ))}
    </ul>
  );
}

function ToDoItem({
  id,
  title,
  description,
  completed,
}: {
  id: Id<"todos">;
  title: string;
  description: string;
  completed: boolean;
}) {
  const updateTodo = useMutation(api.functions.updateTodo);
  const deleteTodo = useMutation(api.functions.deleteTodo);

  return (
    <li className="flex gap-2 border rounded p-2 items-center w-full">
      <Checkbox
        id={`${id}`}
        checked={completed}
        onCheckedChange={(checked: boolean) =>
          updateTodo({ id, completed: checked })
        }
      ></Checkbox>
      <div>
        <Label htmlFor={`${id}`}>
          <p className="font-semibold">{title}</p>
        </Label>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="ml-auto">
        <Button
          className="bg-red-500 hover:bg-red-700"
          onClick={() => deleteTodo({ id })}
        >
          Remove
        </Button>
      </div>
    </li>
  );
}
