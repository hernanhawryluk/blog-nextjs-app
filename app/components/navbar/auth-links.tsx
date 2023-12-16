"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthLinks = () => {
  const { data, status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
          {data && data.user.admin === true && (
            <Link href={"/write"}>Write</Link>
          )}
          <span onClick={() => signOut()} className="cursor-pointer">
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
