"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLinks from "./auth-links";
import { FaBars } from "react-icons/fa";

const NavMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between cursor-pointer relative"
      >
        <FaBars size={23} />
      </div>
      {open && (
        <div className="flex flex-col gap-12 w-full absolute top-[100px] left-0 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50 items-center justify-center h-[70vh] text-2xl">
          <Link href={"/"} className="animation">
            Home
          </Link>
          <Link href={"/"} className="animation">
            About
          </Link>
          <Link href={"/"} className="animation">
            Contact
          </Link>
          <AuthLinks />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
