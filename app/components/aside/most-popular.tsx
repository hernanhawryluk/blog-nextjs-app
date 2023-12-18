import Image from "next/image";
import Link from "next/link";
import { PostType } from "../card-list/card";

const MostPopular = ({ mostPopular }: { mostPopular: PostType[] }) => {
  return (
    <div>
      <h3 className="text-gray-500 dark:text-gray-400 opacity-80 text-xs font-normal">
        What&apos;s hot
      </h3>
      <h3 className="text-xl font-semibold">Most Popular</h3>
      <div className="flex flex-col gap-4 mt-4">
        {mostPopular &&
          mostPopular.map((item) => (
            <Link
              href={`/posts/${item.slug}`}
              key={item.slug}
              className="flex items-center gap-5"
            >
              {item.img && (
                <div className="border-4 rounded-full h-16 w-16 aspect-square relative">
                  <Image
                    src={item.img}
                    alt="image"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              )}
              <div className="flex flex-2 flex-col gap-1">
                <span className="flex items-center text-xs font-medium bg-sky-200 text-gray-800 dark:bg-sky-700 dark:text-white h-5 px-3 max-w-fit rounded-full">
                  {item.catSlug}
                </span>
                <h3 className="text-md">{item.title}</h3>
                <div className="hidden lg:flex flex-nowrap text-xs">
                  <span>{item.user.name} - </span>
                  <span className="text-gray-400">
                    {item.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MostPopular;
