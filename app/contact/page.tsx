"use client";

import React, { useState } from "react";
import Button from "../components/button";
import toast from "react-hot-toast";
import { validateEmail } from "@/utils/validate-email";
import Image from "next/image";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    message: "",
  });

  const submitAction = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.email) {
      toast.error("Please enter your email");
      return;
    }
    if (validateEmail(data.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!data.message) {
      toast.error("Please enter your message");
      return;
    }

    toast.success("Message sent successfully");
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-14"
      style={{ minHeight: "calc(100vh - 380px)" }}
    >
      <div className="w-full sm:w-2/3">
        <h1 className="font-bold text-2xl sm:text-4xl mb-6">Contact Page</h1>
        <p className="font-normal text-sm sm:text-xl mb-8">
          This page was built using Next.js, Tailwind, Firebase, and MongoDB as
          part of my web developer portfolio. I encourage you to contact me via
          this form to discuss job opportunities.
        </p>
        <form action="" className="flex flex-col gap-3">
          <label htmlFor="email" className="mt-3">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            maxLength={100}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="input input-bordered w-full p-3 rounded-lg border-2 border-gray-400 shadow-md dark:bg-white/90 dark:text-gray-900"
          />
          <label htmlFor="message" className="mt-3">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Message"
            value={data.message}
            maxLength={5000}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className="textarea textarea-bordered w-full p-3  border-2 border-gray-400 rounded-lg h-[120px] shadow-md dark:bg-white/90 dark:text-gray-900"
          />
          <Button
            label="Read More"
            custom="border-2 border-gray-600 dark:border-none dark:bg-white/90 dark:text-gray-900 text-xs my-4 h-[50px]"
            onClick={(e) => submitAction(e)}
          />
        </form>
      </div>
      <div className="hidden sm:block sm:w-1/3">
        <Image
          src={"/next-js.webp"}
          alt="contact"
          width={400}
          height={400}
          className="w-full h-auto sm:h-[540px] object-cover shadow-lg rounded-xl opacity-90"
        />
      </div>
    </div>
  );
};

export default Contact;
