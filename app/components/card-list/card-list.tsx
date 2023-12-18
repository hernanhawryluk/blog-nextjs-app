import Pagination from "./pagination";
import Card from "./card";
import { PostType } from "./card";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?page=${page}&cat=${cat}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

type CardListPros = {
  page: number;
  cat?: string;
};

const CardList = async ({ page, cat }: CardListPros) => {
  const { posts, count } = await getData(page, cat || "");

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="sm:w-full">
      <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-8">
        Recent Posts
      </h2>
      <div className="flex flex-col">
        {posts?.map((item: PostType) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
