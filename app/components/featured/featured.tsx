"use client";

import Image from "next/image";
import Button from "../button";
import { useRouter } from "next/navigation";
import { PostType } from "../card-list/card";

const Featured = ({ data }: { data: PostType }) => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-semibold">
        <span className="font-bold">Hey there, Hernan here!</span>{" "}
        <span className="font-normal">
          Discover my stories and creative ideas.
        </span>
      </h1>

      <div className="mt-14 flex items-center gap-12">
        {data.img && (
          <div className="hidden sm:flex flex-1 w-full h-[300px] relative">
            <Image src={data.img} alt="image" fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl font-semibold">{data.title}</h2>
          <p className="text-md font-light text-gray-500 dark:text-gray-400">
            {data.desc.length > 60
              ? data.desc.substring(0, 60) + "..."
              : data.desc}
          </p>
          <div className="w-[8rem]">
            <Button
              label="Read More"
              custom="dark:bg-gray-50 dark:text-gray-900 text-xs"
              onClick={() => router.push(`/posts/${data.slug}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
