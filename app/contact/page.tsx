"use client";

import React, { useState } from "react";
import Button from "../components/button";
import toast from "react-hot-toast";
import { validateEmail } from "@/utils/validate-email";
import Image from "next/image";
import { sendEmail } from "@/actions/send-email";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const validEmail = () => {
    if (!data.email) {
      toast.error("Please enter your email");
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter your email",
      }));
    } else if (validateEmail(data.email)) {
      toast.error("Please enter a valid email address");
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validMessage = () => {
    if (!data.message) {
      toast.error("Please enter your message");
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please enter your message",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }
  };

  const submitAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    validEmail();
    validMessage();
    if (errors.email || errors.message) {
      setIsLoading(false);
      return;
    }

    const { response, error } = await sendEmail(data);

    if (error) {
      toast.error(error.toString());
      setIsLoading(false);
      return;
    }

    toast.success("Message sent successfully");
    setData({ email: "", message: "" });
    setErrors({ email: "", message: "" });
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-14 sm:py-2">
      <div className="w-full sm:w-2/3">
        <h1 className="font-bold text-2xl sm:text-4xl mb-6">Contact Page</h1>
        <p className="font-normal text-sm sm:text-xl mb-8">
          This page was built using Next.js, Tailwind, Firebase, and MongoDB as
          part of my web developer portfolio. I encourage you to contact me via
          this form to discuss job opportunities.
        </p>
        <form className="flex flex-col gap-3">
          <label htmlFor="email" className="mt-3">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            maxLength={100}
            value={data.email}
            onBlur={() => validEmail()}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={`input input-bordered w-full p-3 rounded-lg border-2 border-gray-400 shadow-md dark:bg-white/90 dark:text-gray-900
            ${errors.email.length > 0 && "border-red-500"}
            `}
            required
          />
          {errors.email.length > 0 && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
          <label htmlFor="message" className="mt-3">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Message"
            value={data.message}
            maxLength={5000}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            onBlur={() => validMessage()}
            className={`textarea textarea-bordered w-full p-3  border-2 border-gray-400 rounded-lg h-[120px] shadow-md dark:bg-white/90 dark:text-gray-900
            ${errors.message.length > 0 && "border-red-500"}
            `}
            required
          />
          {errors.message.length > 0 && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
          <Button
            label="Send Message"
            custom="border-2 border-gray-600 dark:border-none dark:bg-white/90 dark:text-gray-900 text-xs my-4 h-[50px]"
            onClick={(e) => {
              submitAction(e);
            }}
            isLoading={isLoading}
          />
        </form>
      </div>
      <div className="hidden sm:block sm:w-1/3">
        <Image
          src={"/next-js.webp"}
          alt="contact"
          width={400}
          height={400}
          className="w-full object-cover shadow-lg rounded-xl opacity-90 h-full"
        />
      </div>
    </div>
  );
};

export default Contact;
