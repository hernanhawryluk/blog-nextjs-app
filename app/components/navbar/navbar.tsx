import Image from "next/image";
import Link from "next/link";
import AuthLinks from "./auth-links";
import ThemeToggle from "./theme-toggle";
import NavMenu from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[80px] sm:h-[100px]">
      <div className="flex sm:w-1/3 text-left text-2xl xl:text-3xl font-bold">
        Coding Blog
      </div>
      <div className="hidden sm:flex w-2/3 xl:1/3 items-center justify-end gap-6 xl:text-lg">
        <ThemeToggle />
        <Link href={"/"} className="animation">
          Home
        </Link>
        <Link href={"/"} className="animation">
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
