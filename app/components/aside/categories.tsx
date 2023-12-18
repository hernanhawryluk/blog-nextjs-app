import Link from "next/link";
import { Category } from "../category-list/category-list";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Categories = async () => {
  const categories = await getData();

  return (
    <div>
      <h3 className="text-gray-400 text-xs font-normal">Discover by topic</h3>
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <div className="flex flex-wrap justify-between items-center gap-2">
        {categories.map((category: Category) => (
          <Link
            key={category.slug}
            href={category.slug}
            style={{ backgroundColor: category.color }}
            className="flex items-center justify-center gap-2 h-10 w-[30%] rounded-md animation"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
