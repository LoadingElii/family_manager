import { Suspense } from "react";
import {Navbar}  from "../ui/navbar/navbar";
import Loading from "./loading";


export default function Layout( {children}: {
  children: React.ReactNode
}) {
  return (
    <div className=" flex min-h-full bg-stone-900 overflow-hidden">
      <div>
        <Navbar />
      </div>
      <Suspense fallback={<Loading/>}></Suspense>
      <div className="w-full justify-self-center">
           {children}
      </div>
    </div>
  );
}
