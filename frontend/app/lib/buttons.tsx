import { redirect, usePathname } from "next/navigation";
import {
  DeleteFamilyMemberById,
  DeleteMemberById,
  DeleteTodoById,
} from "./action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UpdateIcon from "@mui/icons-material/Update";
import { Delete } from "@mui/icons-material";

export function UpdateMemberButton({ id }: { id: number }) {
  return (
    <div className="p-2 ">
      <button
        onClick={() => redirect(`member/edit/${id}`)}
        className=" pb-1 w-full rounded-md bg-green-600 hover:bg-green-300"
      >
        Update
      </button>
    </div>
  );
}

export function DeleteMemberButton({ id }: { id: number }) {
  const ConfirmDeleteMember = () => {
    if (window.confirm("Are you sure?")) {
      return DeleteMemberById(id);
    }
  };

  return (
    <div className="p-2 ">
      <button
        className=" pb-1 w-full rounded-md bg-red-600 hover:bg-red-300"
        onClick={ConfirmDeleteMember}
      >
        Delete
      </button>
    </div>
  );
}

export function DeleteTodoButton({ id }: { id?: number }) {
  const ConfirmDeleteTodo = () => {
    if (window.confirm("Are you sure?")) {
      return DeleteTodoById(id);
    }
  };

  return (
    <div className="p-2 ">
      <button
        className=" p-1 w-full rounded-md bg-red-600 hover:bg-red-300"
        onClick={ConfirmDeleteTodo}
      >
        Delete
      </button>
    </div>
  );
}

export function UpdateTodoButton({ id, pathname }: { id: number, pathname: string }) {
  return (
    <div className="p-2 ">
      <button
        onClick={() => {pathname.includes("family") ? redirect(`../todo/update/${id}`): redirect(`todo/update/${id}`)}}
        className=" pb-1  rounded-md bg-yellow-600 hover:bg-yellow-300"
      >
        <UpdateIcon />
      </button>
    </div>
  );
}

export function ViewTodoButton({ id, pathname }: { id?: number, pathname: string }) {
  return (
    <div className="p-2 ">
      <button
        onClick={() => {pathname.includes("family") ? redirect(`../todo/${id}`) : redirect(`todo/${id}`)}}
        className=" pb-1 rounded-md bg-blue-600 hover:bg-blue-300"
      >
        <VisibilityIcon />
      </button>
    </div>
  );
}

export function ViewFamilyMemberButton({ id }: { id: number}) {
  return (
    <div className="p-2 ">
      <button
        onClick={() => redirect(`member/${id}`)}
        className=" pb-1 rounded-md bg-blue-600 hover:bg-blue-300"
      >
        <VisibilityIcon className="w-8 h-8" />
      </button>
    </div>
  );
}

export function DeleteFamilyMemberButton({ id }: { id: number }) {
  return (
    <div className="p-2 ">
      <button
        onClick={() => DeleteFamilyMemberById(id)}
        className=" pb-1 rounded-md bg-red-600 hover:bg-red-300"
      >
        <Delete className="w-8 h-8" />
      </button>
    </div>
  );
}


