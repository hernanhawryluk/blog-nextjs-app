"use client";

import Image from "next/image";
import Button from "../button";
import { useRouter } from "next/navigation";
import { PostType } from "../card-list/card";
import Link from "next/link";

const Featured = ({ data }: { data: PostType }) => {
  const router = useRouter();

  return (
    <div>
      <div>
        <p className="font-bold mb-1 text-2xl sm:text-5xl">
          A Journey into Creativity!
        </p>
        <h1 className="font-normal text-sm sm:text-5xl">
          Discover my stories and creative ideas.
        </h1>
      </div>

      <div className="mt-8 sm:mt-14 flex items-center gap-12">
        {data.img && (
          <div className="hidden sm:flex flex-1 w-full h-[300px] relative">
            <Image src={data.img} alt="image" fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-5">
          <Link href={`/posts/${data.slug}`}>
            <h2 className="text-3xl sm:text-4xl font-semibold">{data.title}</h2>
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: data.desc.substring(0, 207) + "...",
            }}
            className="text-lg font-light text-gray-500 dark:text-gray-400"
          />
          <div className="w-[8rem]">
            <Button
              label="Read More"
              custom="border-2 border-gray-600 dark:border-none dark:bg-gray-50 dark:text-gray-900 text-xs"
              onClick={() => router.push(`/posts/${data.slug}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
