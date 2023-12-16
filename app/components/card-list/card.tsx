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
        <div className="flex-1 h-[350px] relative">
          <Image src={item.img} alt="image" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col flex-1 gap-5">
        <div>
          <span className="text-gray-400">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-pink-900 dark:text-rose-500 font-normal opacity-80">
            {item.catSlug.toUpperCase()}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2 className="text-2xl font-semibold">{item.title}</h2>
        </Link>
        <p className="text-md font-light text-gray-500 dark:text-gray-300">
          {item.desc.length > 60
            ? item.desc.substring(0, 60) + "..."
            : item.desc}
        </p>
        <Link href={`/posts/${item.slug}`} className="border-b-2 max-w-fit">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
