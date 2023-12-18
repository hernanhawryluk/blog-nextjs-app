"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthLinks = () => {
  const { data, status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"} className="animation">
          Login
        </Link>
      ) : (
        <>
          {data && data.user.admin === true && (
            <Link href={"/write"} className="animation">
              Write
            </Link>
          )}
          <span onClick={() => signOut()} className="cursor-pointer animation">
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
