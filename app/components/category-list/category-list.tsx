import Image from "next/image";
import Link from "next/link";

export type Category = {
  title: string;
  slug: string;
  color: string;
  img: string;
};

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className="mt-8">
      <h2 className="text-xl sm:text-3xl font-bold mb-3">Popular Categories</h2>

      <div className="flex flex-wrap justify-between items-center gap-2">
        {categories.map((category: Category) => (
          <Link
            key={category.slug}
            href={`blog?cat=${category.slug}`}
            style={{ backgroundColor: category.color }}
            className="flex items-center justify-center gap-2 h-12 w-[48%] md:w-[32%] lg:w-[15%] rounded-md animation"
          >
            {category.img && (
              <Image
                src={category.img}
                alt={category.title}
                width={20}
                height={20}
                className="overflow-hidden rounded-full aspect-square"
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
