import { Logout } from "@/app/lib/action";
import {  } from "@/app/lib/buttons";
import clsx from "clsx";
import { redirect, usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/dashboard/home" },
    { name: "Todos", href: "/dashboard/todo"},
    { name: "Family", href: "/dashboard/family"},
    { name: "Family Todos", href:"/dashboard/todo/family"},
    { name: "Account", href: "/dashboard/member"},
    { name: "Logout", href: " "},
]

export default function Navlinks() {
    const pathname = usePathname();

    return (
     <div className="grid grid-cols-1">
          {links.map((link) => {
            return (
              <button
                key={link.name}
                onClick={() => link.name == "Logout" ? Logout() : redirect(link.href)}
                className={clsx(
                "h-20 hover:text-white hover:opacity-50" , 
               { "text-blue-400": pathname === link.href, },
              )}
            >
             <p className="">{link.name}</p>  
           </button> 
           );
           })}
     </div>
    )
}