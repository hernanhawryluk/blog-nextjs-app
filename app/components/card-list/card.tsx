"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  image: string;
};

export type PostType = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
  catSlug: string;
  userEmail: string;
  user: User;
};

const Card = ({ item }: { item: PostType }) => {
  const router = useRouter();

  return (
    <div className="flex gap-12 mb-12 items-center">
      {item.img && (
        <div className="hidden lg:flex flex-1 h-[320px] max-w-[120px] xl:max-w-[250px] 2xl:max-w-[580px] relative">
          <Image src={item.img} alt="image" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col flex-1 gap-4 pb-0 xl:pb-1">
        <div className="hidden sm:block text-sm opacity-70 dark:opacity-60">
          <span className="text-gray-500 dark:text-gray-400">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-pink-800 dark:text-rose-500 font-normal opacity-80">
            {item.catSlug.toUpperCase()}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2 className="text-3xl font-semibold">{item.title}</h2>
        </Link>
        <p className="text-md font-light text-gray-500 dark:text-gray-300">
          {item.desc
            .replace(/<p>|<\/p>|<br>|/g, "")
            .replace('<strong style="color: var(--tw-prose-bold);">', " ")
            .replace("</strong>", " ")
            .substring(0, 320) + "..."}
        </p>
        <div className="w-[8rem]">
          <Button
            label="Read More"
            custom="border-2 border-gray-600 dark:border-none dark:bg-gray-50 dark:text-gray-900 text-xs"
            onClick={() => router.push(`/posts/${item.slug}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
