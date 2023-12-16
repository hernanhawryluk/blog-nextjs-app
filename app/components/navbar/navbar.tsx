import Image from "next/image";
import Link from "next/link";
import AuthLinks from "./auth-links";
import ThemeToggle from "./theme-toggle";
import NavMenu from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[100px]">
      <div className="hidden xl:flex w-1/3 items-center gap-3">
        <Image src={"/facebook.png"} alt="Facebook" width={24} height={24} />
        <Image src={"/instagram.png"} alt="Instagram" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="TikTok" width={24} height={24} />
        <Image src={"/youtube.png"} alt="Youtube" width={24} height={24} />
      </div>
      <div className="flex sm:w-1/3 text-left lg:text-center text-2xl xl:text-3xl font-bold">
        Hernan&apos;s Blog
      </div>
      <div className="hidden sm:flex w-2/3 xl:1/3 items-center justify-end gap-6 xl:text-lg">
        <ThemeToggle />
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
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
