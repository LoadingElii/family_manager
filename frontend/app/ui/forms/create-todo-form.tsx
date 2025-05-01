"use client";
import { CreateFamilyTodo, CreateMemberTodo } from "@/app/lib/action";
import { redirect } from "next/navigation";
import { useState } from "react";

export const CreateTodoForm = () => {
  const [isOwner, setIsOwner] = useState(false);

  const createTodo = isOwner ? CreateFamilyTodo : CreateMemberTodo;


  return (
    <main className="flex justify-center h-full w-full overflow-hidden">
      <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md  my-12 w-1/4 md:w-3/5 p-2 md:p-6  ">
        <div className="place-self-center">
          <h2 className="text-xl text-white">Create A Todo</h2>
        </div>
        <form className="" action={createTodo}>
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
              placeholder="Enter Description"
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
              defaultValue="low"
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
            <div className="">
              <label>
                <input
                  type="radio"
                  name="completed"
                  value={1}
                />
                Yes
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
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="owner"
            >
              Who's it for?
            </label>
            <div className="">
              <label>
                <input 
                  type="checkbox" 
                  name="member_id" 
                  checked={!isOwner} 
                  onChange={() => setIsOwner(!isOwner)}
                /> 
                Me{" "}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="family_id"
                  checked={isOwner} 
                  onChange={() => setIsOwner(!isOwner)}
                />{" "}
                Family{" "}
              </label>
            </div>
          </div>
          <button
            className=" mt-3 p-1 w-full rounded-md bg-green-600 hover:bg-green-300 "
            type="submit"
          >
            create
          </button>
          <button
            className=" mt-3 p-1 w-full rounded-md bg-red-600 hover:bg-red-300 "
            onClick={() => redirect("/dashboard/home")}
            type="button"
          >
            cancel
          </button>
        </form>
      </div>
    </main>
  );
};
