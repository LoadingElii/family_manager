"use client";

import { useState } from "react";
import Navlinks from "./navlinks";
import clsx from "clsx";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block w-60 h-full bg-slate-800 rounded-md z-10">
        <h1 className="pt-2 text-xl justify-self-center">Family Manager</h1>
        <div className=" pt-4 text-lg">
          <Navlinks />
        </div>
      </div>
      <div className="MOBILE block h-full md:hidden">
        <button onClick={() => setOpen(!open)} className="pl-1 pt-2">
          {open ? <CloseRoundedIcon /> : <DehazeRoundedIcon />}
        </button>
        <div
          className={clsx(
            open ? "MOBILE w-48 bg-slate-800 rounded-md " : "hidden"
          )}
        >
          <h1 className="pt-2 text-xl justify-self-center">Family Manager</h1>
          <div className=" pt-2 text-lg">
            <Navlinks />
          </div>
        </div>
      </div>
    </>
  );
};
