import { UpdateMember } from "@/app/lib/action";
import { Member } from "@/app/lib/models";
import Link from "next/link";

export const UpdateMemberForm = ({
  updateMember,
}: {
  updateMember: Member;
}) => {
  return (
    <main className="flex justify-center h-full w-full overflow-hidden">
      <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md  my-12 w-1/4 md:w-3/5 p-2 md:p-6  ">
        <div className="place-self-center">
          <h2 className="text-xl text-white">Update Member Info</h2>
        </div>
        <form className="" action={UpdateMember}>
          <div className="">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="text-black rounded-md w-full"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Enter First Name"
              defaultValue={updateMember.first_name}
              required
            />
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="text-black rounded-md w-full"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Enter Last Name"
              defaultValue={updateMember.last_name}
              required
            />
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="text-black rounded-md w-full"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                defaultValue={updateMember.email}
                required
              />
            </div>
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className=" text-black rounded-md w-full"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                defaultValue={updateMember.password}
                required
                minLength={6}
              />
            </div>
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-white"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="text-black"
              type="number"
              name="age"
              id="age"
              min={3}
              max={100}
              defaultValue={updateMember.age}
              required
            />
          </div>
            <button
              className=" mt-3 p-1 w-full rounded-md bg-green-600 hover:bg-green-300 "
              type="submit"
            >
              update
            </button>
            <button
              className=" mt-3 p-1 w-full rounded-md bg-red-600 hover:bg-red-300 "
              type="button"
            >
              <Link href={"../../member"}>
                 cancel
              </Link>
            </button>
        </form>
      </div>
    </main>
  );
};
