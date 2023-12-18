import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?page=${page}&cat=${cat}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts, count } = await getData(1, "");

  const urls: string[] = [BASE_URL as string];

  for (const post of posts) {
    urls.push(`${BASE_URL}/posts/${post.slug}`);
  }

  return urls.map((url) => ({
    url,
    lastModified: new Date(),
  }));
}
