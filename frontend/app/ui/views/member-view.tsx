"use client";
import { DeleteMemberButton, UpdateMemberButton } from "@/app/lib/buttons";
import { Member } from "@/app/lib/models";
import Image from "next/image";

export const MemberView = ({ member }: { member: Member }) => {
  return (
    <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6 ">
      <h1 className="justify-self-center text-2xl underline underline-offset-8">
        My Account
      </h1>
      <div className="grid grod-cols-1 md:grid-cols-2 justify-self-center">
        <p className="text-xl">
          {" "}
          <span className="font-bold pr-2">First Name:</span>
          {member.first_name}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-bold pr-2">Last Name:</span> {member.last_name}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-bold pr-2">Id:</span> {member.id}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-bold pr-2">Email:</span> {member.email}
        </p>
      </div>
      <div>
        <UpdateMemberButton id={member.id}/>
        <DeleteMemberButton id={member.id}/>
      </div>

    </div>
    
  );
};
