import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export const GET = async () => {
  try {
    const featuredPost = await prisma.post.findFirst({
      orderBy: {
        createdAt: "asc",
      },
      include: {
        user: true,
      },
    });

    return new NextResponse(JSON.stringify(featuredPost), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
