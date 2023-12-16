import MostPopular from "./most-popular";
import Categories from "./categories";
import EditorsPick from "./editors-pick";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/most-relevant`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Aside = async () => {
  const { mostPopular, editorsPick } = await getData();

  return (
    <div className="hidden sm:flex flex-col gap-8 w-[30%]">
      <MostPopular mostPopular={mostPopular} />
      <Categories />
      <EditorsPick editorsPick={editorsPick} />
    </div>
  );
};

export default Aside;
