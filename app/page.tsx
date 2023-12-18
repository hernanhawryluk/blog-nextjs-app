import CardList from "./components/card-list/card-list";
import CategoryList from "./components/category-list/category-list";
import Featured from "./components/featured/featured";
import Aside from "./components/aside/aside";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/featured/`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page) || 1;
  const featuredPost = await getData();

  return (
    <main>
      <Featured data={featuredPost} />
      <CategoryList />
      <div className="flex gap-12 mt-12">
        <CardList page={page} />
        <Aside />
      </div>
    </main>
  );
}
