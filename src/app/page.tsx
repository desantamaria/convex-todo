"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import NewTodoForm from "./_components/new-todo-form";
import { ToDoList } from "./_components/todo-list";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Button } from "@/components/ui/Button";
import { CircularProgress } from "@nextui-org/progress";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      {/* <div className="h-screen w-screen flex justify-center items-center"> */}
      <div className="">
        <Authenticated>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">To-Do List</h1>
            <UserButton />
          </div>
          <ToDoList />
          <NewTodoForm />
        </Authenticated>
        <Unauthenticated>
          <p className="text-white">Please sign in to continue</p>
          <SignInButton>
            <Button className="bg-purple-500 hover:bg-purple-700">
              Sign in
            </Button>
          </SignInButton>
        </Unauthenticated>
        <AuthLoading>
          <CircularProgress />
          <p>Loading ...</p>
        </AuthLoading>
      </div>
    </div>
  );
}
