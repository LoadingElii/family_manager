"use client";
import Link from "next/link";
import { FamilyModal } from "../forms/modal";
import { CreateFamilyModal } from "./create-family-view";
import { onClose } from "@/app/lib/action";

export default function NoFamilyTodoView() {

    return (
        <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6">
          <div className="justify-self-center text-xl mt-4">
            <h1>Not a member of a Family</h1>
          </div>
          <div className="flex flex-col justify-items-center md:mx-24">
            <Link className="justify-self-start self-center" href={"./family?modal=create-family"}>Create Family</Link>
            <FamilyModal onClose={onClose}>
              <CreateFamilyModal />
            </FamilyModal>
          </div>
        </div>
    )
}