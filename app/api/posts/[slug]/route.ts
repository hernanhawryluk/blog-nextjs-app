import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { NextApiRequest } from "next";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  try {
    const post = await prisma.post.update({
      where: { slug: slug },
      data: { views: { increment: 1 } },
      include: { user: true },
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
