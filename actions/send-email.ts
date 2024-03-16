"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/libs/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

type sendEmailProps = {
  email: string;
  message: string;
};

export const sendEmail = async (data: sendEmailProps) => {
  const email = data.email;
  const message = data.message;

  if (!validateString(email, 100)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let response;

  try {
    response = await resend.emails.send({
      from: "Blog - Portfolio <onboarding@resend.dev>",
      to: "hernanhawryluk@gmail.com",
      subject: "Message from contact form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: email as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { response };
};
