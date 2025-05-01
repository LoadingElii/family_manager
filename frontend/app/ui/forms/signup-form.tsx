import { SignUpMember } from "@/app/lib/action";
import Link from "next/link";

export const Signup = () => {

  return (
    <main className="flex justify-center h-screen overflow-hidden">
      <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/4 p-6 md:w-2/4 ">
        <div className="place-self-center">
          <h2 className="text-xl text-white">Sign Up</h2>
        </div>
        <form className="" action={SignUpMember}>
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
              required
            />
          </div>
          <button
            className=" mt-3 p-1 w-full rounded-md bg-blue-600 hover:bg-blue-300 "
            type="submit"
          >
            submit
          </button>
          <div className="flex justify-center mt-2">
            <Link
              className=" underline text-blue-300 hover:text-white"
              href="/login"
            >
              Back to Login?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
