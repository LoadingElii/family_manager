import { LoginMember} from "@/app/lib/action";
import Link from "next/link";

export const Login = () => {

    return (
        <main className="flex justify-center h-screen overflow-hidden">
          <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/4 p-6 md:w-2/4">
            <div className="place-self-center">
              <h2 className="text-xl text-white">Login</h2>
            </div>
            <form className="self-start" action={LoginMember}>
              <div className="">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-white"
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
                  className="mb-3 mt-5 block text-xs font-medium text-white"
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
                    placeholder="Enter Password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
              <button
                className=" mt-6 p-1 w-full rounded-md bg-blue-600 hover:bg-blue-300 "
                type="submit"
              >
                login
              </button>
              <div className="flex justify-center mt-2">
                <Link
                  className="underline text-blue-300 hover:text-white"
                  href="/signup"
                >
                  Create an account?
                </Link>
              </div>
            </form>
          </div>
        </main>
      );
}