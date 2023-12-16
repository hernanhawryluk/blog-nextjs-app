import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

const NUMBER_OF_POSTS = 3;

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
    });

    const sortPosts = posts.sort((a, b) => b.views - a.views);
    const mostPopular = sortPosts.slice(0, NUMBER_OF_POSTS);
    const editorsPickCheck = posts.filter((post) => post.isEditorPick === true);
    const editorsPick = editorsPickCheck.slice(0, NUMBER_OF_POSTS);
    const data = { mostPopular, editorsPick };

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
