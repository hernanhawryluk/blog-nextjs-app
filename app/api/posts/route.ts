import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url as string);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const parsedPage = page ? parseInt(page) : 1;

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (parsedPage - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not authenticated!" }), {
      status: 401,
    });
  }

  if (!session.user.email) {
    return new NextResponse(JSON.stringify({ message: "Not authenticated!" }), {
      status: 401,
    });
  }

  if (session.user.admin === false) {
    return new NextResponse(JSON.stringify({ message: "Not authorized!" }), {
      status: 401,
    });
  }

  const email: string = session.user.email;

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: email },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
