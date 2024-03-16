"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AuthLinksType = {
  closeMenu?: () => void;
};

const AuthLinks = ({ closeMenu = () => {} }: AuthLinksType) => {
  const { data, status } = useSession();
  const pathname = usePathname();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link
          href={"/login"}
          className={`animation ${
            pathname === "/login" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => closeMenu()}
        >
          Login
        </Link>
      ) : (
        <>
          {data && data.user.admin === true && (
            <Link
              href={"/write"}
              className="animation"
              onClick={() => closeMenu()}
            >
              Write
            </Link>
          )}
          <span
            onClick={() => {
              signOut();
              closeMenu();
            }}
            className="cursor-pointer animation"
          >
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
