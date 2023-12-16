"use client";

import { useTheme } from "@/context/theme-context";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={() => toggleTheme()}
      className={`w-11 h-6 rounded-3xl cursor-pointer flex items-center justify-between relative px-1
      ${theme === "dark" ? "bg-gray-50" : "bg-gray-900"}
      `}
    >
      <Image src={"/sun.png"} alt="Sun" width={14} height={14} />
      <div
        className={`w-4 h-4 rounded-full absolute bg-gray-500
      ${theme === "dark" ? "right-[3px]" : "left-[3px]"}
      `}
      ></div>
      <Image src={"/moon.png"} alt="Moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
