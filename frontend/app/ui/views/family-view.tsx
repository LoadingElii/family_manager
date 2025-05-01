"use client";
import { AddFamilyMemberByEmail, UpdateFamilyName } from "@/app/lib/action";
import {
  DeleteFamilyMemberButton,
  ViewFamilyMemberButton,
} from "@/app/lib/buttons";
import { Family } from "@/app/lib/models";
import { Card, CardBody, CardFooter } from "@heroui/card";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import { useState } from "react";
import { CreateFamilyModal } from "./create-family-view";
import { clsx } from "clsx";

export const FamilyView = ({ family }: { family: Family }) => {
  const [memberEmail, setMemberEmail] = useState(" ");
  const [editFamilyName, setEditFamilyName] = useState(false);
  const [familyName, setFamilyName] = useState(" ");

  if (family == undefined) {
    return (
      <div className="grid grid-cols-1 justify-items-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4  ">
        <div className="justify-self-center text-xl mt-4">
          <h1>Currently Not Part of a Family</h1>
        </div>
        <div className="justify-items-center">
          <CreateFamilyModal />
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6 ">
      <div className=" md:col-span-3  py-2">
        {editFamilyName ? (
          <>
            <div>
              <form action={UpdateFamilyName} className="flex flex-row">
                <label
                  htmlFor="Enter family name"
                  className="text-white font-semibold pr-2"
                >
                  Family Name:
                </label>
                <input
                  type="text"
                  id="family_name"
                  placeholder="enter family name"
                  name="family_name"
                  className="text-black md:w-1/2 h-6 rounded-md"
                  onChange={(e) => setFamilyName(e.target.value)}
                />
                <button
                  type="submit"
                  className="pb-1 rounded-md text-white h-6 w-24 bg-blue-600 hover:bg-blue-300"
                >
                  Enter
                </button>
             
                <div className="pl-2">
                  <button
                    className="w-20 h-6 bg-red-600 hover:bg-red-300 rounded-md"
                    onClick={() => setEditFamilyName(!editFamilyName)}
                  >
                    X
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="flex flex-row justify-around">
            <h2 className="font-bold">Family Name:</h2>
            <h3 className="font-semibold text-xl uppercase">
              {family.family_name}
            </h3>
            <button
              type="button"
              id="edit-family"
              className="bg-blue-600 hover:bg-blue-300 rounded-md"
              onClick={() => setEditFamilyName(!editFamilyName)}
            >
              <EditIcon />
            </button>
          </div>
        )}
      </div>
      <div className="justify-self-center">
        <p>
          <span className=" col-span-2 font-semibold pr-2">Family Id:</span>
          {family.id}
        </p>
      </div>
      <div
        className={clsx(
          editFamilyName ? "flex flex-row justify-around col-span-2" : "hidden"
        )}
      >
        <form action={AddFamilyMemberByEmail}>
          <span className="font-semibold pr-2">Add Member:</span>
          <input
            type="email"
            className="rounded-md text-black h-6 md:w-1/2 pr-4"
            name="member_email"
            id="member-email"
            onChange={(e) => setMemberEmail(String(e.target.value))}
            placeholder="enter email here"
          />
          <button
            type="submit"
            id="member-email"
            className="bg-green-600 text-bold rounded-md hover:opacity-50 h-6 w-24"
          >
            Add
          </button>
        </form>
      </div>
      <div className="flex justify-around md:flex-nowrap flex-wrap col-span-2 md:col-span-3 overflow-y-auto md:overflow-hidden">
        {family.members.map((member, index) => (
          /* eslint-disable no-console */
          (<Card key={index} shadow="lg">
            <CardBody className="overflow-visible bg-slate-600">
              <p>
                Name {member.first_name} {member.last_name}
              </p>
              <p className="">Email {member.email}</p>
            </CardBody>
            <CardFooter className="text-small justify-around bg-slate-300">
              <ViewFamilyMemberButton id={member.id} />
              <DeleteFamilyMemberButton id={member.id} />
            </CardFooter>
          </Card>)
        ))}
      </div>
    </div>
  );
};
