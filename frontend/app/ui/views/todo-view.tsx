"use client";
import { DeleteTodoButton } from "@/app/lib/buttons";
import { TodoItem } from "@/app/lib/models";
import { redirect } from "next/navigation";

export const TodoView = ({ selectedTodo }: { selectedTodo: TodoItem }) => {
  return (
    <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6 ">
      <h1 className="justify-self-center text-2xl underline underline-offset-8">
        My Todo
      </h1>

      <div className="grid grod-cols-1 md:grid-cols-2 justify-self-center">
        <p className="text-xl">
          <span className="font-bold pr-2">Todo id:</span> {selectedTodo.id}
        </p>
        <p className="text-xl">
          <span className="font-bold pr-2">Description:</span>
          {selectedTodo.description}
        </p>
        <p className="text-xl">
          <span className="font-bold pr-2">Urgency:</span>
          {selectedTodo.urgency}
        </p>
        <p className="text-xl">
          <span className="font-bold pr-2">Completed:</span>
          {String(selectedTodo.completed)}
        </p>
      </div>
      <div>
        <DeleteTodoButton id={selectedTodo.id} />
        <button
          className=" mt-3 p-1 w-full rounded-md bg-purple-600 hover:bg-purple-300 "
          onClick={() => redirect("/dashboard/home")}
          type="button"
        >
          cancel
        </button>
      </div>
    </div>
  );
};
