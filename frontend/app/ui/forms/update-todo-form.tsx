"use client";
import { UpdateTodoById } from "@/app/lib/action";
import { Member, TodoItem } from "@/app/lib/models";
import { redirect } from "next/navigation";
import { useState } from "react";

export const UpdateTodoForm = ({
  todoToUpdate,
}: {
  todoToUpdate: TodoItem,
}) => {
  // const [isOwner, setIsOwner] = useState(false);

  return (
    <main className="flex justify-center h-full w-full overflow-hidden">
      <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md  my-6 w-1/4 md:w-4/5 p-2 md:p-6  ">
        <div className="place-self-center">
          <h2 className="text-xl text-white">Update A Todo</h2>
        </div>
        <form action={UpdateTodoById}>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="id"
            >
              id #:
            </label>
            <h3>{todoToUpdate.id}</h3>
            <input type="hidden" name="todo-id" value={todoToUpdate.id || " "} />
          </div>
          <div className="">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="text-black rounded-md w-full"
              name="description"
              id="description"
              defaultValue={todoToUpdate.description || " "}
              placeholder="enter description"
              required
            />
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="urgency"
            >
              Urgency
            </label>

            <select
              className="text-black rounded-md w-full"
              name="urgency"
              id="urgency"
              defaultValue={todoToUpdate.urgency || " "}
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="completed"
            >
              Completed
            </label>
            <div>
              <label>
                <input 
                  type="radio" 
                  name="completed" 
                  value={1} /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="completed"
                  value={0}
                  defaultChecked={true}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <button
              className=" mt-3 p-1 w-full rounded-md bg-green-600 hover:bg-green-300 "
              type="submit"
            >
              Update
            </button>
            <button
              className=" mt-3 p-1 w-full rounded-md bg-red-600 hover:bg-red-300 "
              onClick={() => redirect("../../todo")}
              type="button"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
