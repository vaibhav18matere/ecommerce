import Link from "next/link";
import React, { useContext } from "react";
import { buttonVariants } from "./button";
import Auth from "../auth/auth";

const Header = () => {
  return (
    <header className="fixed top-0 flex h-28 w-[80%] items-center justify-between bg-slate-200 p-10">
      <div className="flex items-center space-x-2">
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "link",
          })}
        >
          Home
        </Link>
        <Link
          href={"/orders"}
          className={buttonVariants({
            variant: "link",
          })}
        >
          Orders
        </Link>
        <Link
          href={"/admin/dashboard"}
          className={buttonVariants({
            variant: "link",
          })}
        >
          Admin Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Auth />
      </div>
    </header>
  );
};

export default Header;
