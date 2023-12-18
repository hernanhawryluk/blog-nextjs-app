import CardList from "../components/card-list/card-list";
import Aside from "../components/aside/aside";

const BlogPage = ({
  searchParams,
}: {
  searchParams: { page: string; cat: string };
}) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <h1 className="bg-red-400 bg-opacity-30 text-center py-3 mb-6 sm:mb-10 capitalize text-2xl font-semibold">
        {cat} Blog
      </h1>
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Aside />
      </div>
    </div>
  );
};

export default BlogPage;
