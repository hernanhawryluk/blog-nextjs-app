"use client";

import Link from "next/link";
import Button from "../button";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";

export type CommentType = {
  id: string;
  createdAt: string;
  desc: string;
  postSlug: string;
  userEmail: string;
  user: {
    name: string;
    image: string;
  };
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const fetcher = async (url: string) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }

    return data;
  };

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        desc,
        postSlug,
      }),
    });
    mutate();
  };

  return (
    <div>
      <h1 className="font-semibold text-lg">Comments</h1>
      {status === "authenticated" ? (
        <div className="mb-8">
          <textarea
            placeholder="Write a comment..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border-2 border-gray-400 rounded-md p-2 my-2 dark:text-gray-800"
          />
          <Button
            label="Send"
            custom="border-2 font-medium border-gray-800 dark:border-gray-200"
            onClick={() => handleSubmit()}
          />
        </div>
      ) : (
        <div className="mt-2 mb-8">
          <Link href={"/login"}>Login to write a comment</Link>
        </div>
      )}
      <div className="flex flex-col gap-6">
        {isLoading ? (
          <div className="mt-2 mb-8">Loading comments...</div>
        ) : (
          data?.map((item: CommentType) => (
            <div key={item.id} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                {item?.user?.image && (
                  <div className="h-[35px] w-[35px] relative">
                    <Image
                      src={item.user.image}
                      alt="image"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.user.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.createdAt.substring(0, 10) +
                      " - " +
                      item.createdAt.substring(11, 16)}
                  </span>
                </div>
              </div>
              <div>{item.desc}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
