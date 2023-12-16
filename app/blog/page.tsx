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
      <h1 className="bg-red-400 text-center py-1 mb-7 capitalize">
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
