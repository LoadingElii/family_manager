"use client";
import { Member } from "@/app/lib/models";
import Image from "next/image";
import { redirect } from "next/navigation";

export const MemberByIdView = ({ member }: { member: Member }) => {
  return (
    <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6 ">
      <h1 className="justify-self-center text-2xl underline underline-offset-8">
        {member.first_name} {member.last_name.slice(0,1)}'s Account
      </h1>
      <div className="justify-self-center">
        <Image
          width={27}
          height={27}
          src={"/images\member_icon.png"}
          alt="profile picture"
        />
      </div>
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
      <div className="">
        <button 
        onClick={() => redirect("/dashboard/family")}
        className=" mt-6 pb-1 w-full rounded-md bg-red-600 hover:bg-red-300 ">Back</button>
      </div>
    </div>
    
  );
};