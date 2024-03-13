"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

type AuthLinksType = {
  closeMenu: () => void;
};

const AuthLinks = ({ closeMenu }: AuthLinksType) => {
  const { data, status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"} className="animation" onClick={() => closeMenu()}>
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
