"use client";

import Link from "next/link";
import AuthLinks from "./auth-links";
import ThemeToggle from "./theme-toggle";
import NavMenu from "./nav-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between h-[80px] sm:h-[120px]">
      <div className="flex sm:w-1/3 text-left text-2xl xl:text-[1.6rem] font-bold">
        Coding Blog
      </div>
      <div className="hidden sm:flex w-2/3 xl:1/3 items-center justify-end gap-6 xl:text-lg">
        <ThemeToggle />
        <Link
          href={"/"}
          className={`animation ${
            pathname === "/" ? "underline underline-offset-4" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href={"/contact"}
          className={`animation ${
            pathname === "/contact" ? "underline underline-offset-4" : ""
          }`}
        >
          Contact
        </Link>
        <Link href={"/"} className="animation">
          About
        </Link>
        <AuthLinks />
      </div>
      <div className="flex sm:hidden items-center gap-3">
        <ThemeToggle />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
