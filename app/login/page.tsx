"use client";

import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Button from "../components/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const buttonStyle = "w-[220px] sm:w-[240px] h-12 font-semibold text-white";
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center mt-12 mb-20">
      <div className="flex flex-col justify-center items-center bg-gray-200 bg-opacity-80 dark:bg-slate-800 py-20 w-full sm:w-[480px] gap-12 rounded-lg">
        <Button
          label="Sign in with Google"
          icon={FaGoogle}
          custom={`bg-red-500 dark:bg-red-500
          ${buttonStyle}
          `}
          onClick={() => signIn("google")}
        />
        <Button
          label="Sign in with GitHub"
          icon={FaGithub}
          custom={`bg-black dark:bg-black
          ${buttonStyle}
          `}
          onClick={() => signIn("github")}
        />
        <Button
          label="Sign in with Facebook"
          icon={FaFacebook}
          custom={`bg-blue-600 dark:bg-blue-600
          ${buttonStyle}
          `}
          onClick={() => signIn("facebook")}
        />
      </div>
    </div>
  );
};

export default Login;
