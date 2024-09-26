"use client";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

// Form Validation
const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

type ToDoFormProps = {
  onCreate: (title: string, description: string) => void;
};

const NewTodoForm = ({ onCreate }: ToDoFormProps) => {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // Define a submit handler
  function onSubmit({ title, description }: z.infer<typeof formSchema>) {
    onCreate(title, description);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-slate-500 hover:bg-slate-700 w-full"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default NewTodoForm;
