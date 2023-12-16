import Image from "next/image";
import Aside from "../../components/aside/aside";
import Comments from "@/app/components/comments/comments";

const getData = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div>
      <div className="flex sm:flex-row gap-12">
        <div className="sm:w-[50%] flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div className="flex gap-3 items-center">
            {data?.user?.image && (
              <div className="h-[35px] w-[35px] relative">
                <Image
                  src={data.user.image}
                  alt="image"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            )}
            <div className="flex flex-col text-gray-500 ">
              <span className="font-semibold">{data?.user.name}</span>
              <span className="text-xs">{data.createdAt}</span>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex sm:w-[50%]">
          {data.img && (
            <div className="h-[100%] w-[100%] rounded-md overflow-hidden relative">
              <Image src={data.img} alt="image" fill className="object-cover" />
            </div>
          )}
        </div>
      </div>

      <div className="flex mt-12 gap-12">
        <div className="sm:w-[65%] flex flex-col gap-12">
          <div dangerouslySetInnerHTML={{ __html: data.desc }}></div>
          <Comments postSlug={data.slug} />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default SinglePage;
