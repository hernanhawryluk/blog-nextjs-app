"use client";

import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Button from "../components/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const buttonStyle = "w-[240px] h-12 font-semibold text-white";
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex flex-col bg-gray-200 dark:bg-slate-800 py-20 px-32 gap-12 rounded-lg">
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
