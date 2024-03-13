"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLinks from "./auth-links";
import { FaBars } from "react-icons/fa";

const NavMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between cursor-pointer relative"
      >
        <FaBars size={23} />
      </div>
      {open && (
        <div className="flex flex-col gap-16 w-full h-[92vh] absolute top-[80px] left-0 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50 items-center justify-center text-2xl pb-12">
          <Link href={"/"} className="animation" onClick={() => closeMenu()}>
            Home
          </Link>
          <Link href={"/"} className="animation" onClick={() => closeMenu()}>
            About
          </Link>
          <Link href={"/"} className="animation" onClick={() => closeMenu()}>
            Contact
          </Link>
          <AuthLinks closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
