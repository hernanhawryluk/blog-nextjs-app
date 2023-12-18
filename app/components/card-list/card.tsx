import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex gap-12 mb-12 items-center">
      {item.img && (
        <div className="hidden lg:flex flex-1 h-[350px] max-w-[120px] xl:max-w-[250px] 2xl:max-w-[580px] relative">
          <Image src={item.img} alt="image" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col flex-1 gap-4">
        <div className="hidden sm:block text-sm opacity-70 dark:opacity-60">
          <span className="text-gray-500 dark:text-gray-400">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-pink-800 dark:text-rose-500 font-normal opacity-80">
            {item.catSlug.toUpperCase()}
          </span>
        </div>
        <h2>
          <Link
            aria-label={item.title}
            href={`/posts/${item.slug}`}
            className="text-3xl font-semibold"
          >
            {item.title}
          </Link>
        </h2>
        <div
          className="text-md font-light text-gray-500 dark:text-gray-300"
          dangerouslySetInnerHTML={{
            __html: item.desc.substring(0, 240) + "...",
          }}
        />

        <Link
          href={`/posts/${item.slug}`}
          className="border-b-2 max-w-fit animation"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
