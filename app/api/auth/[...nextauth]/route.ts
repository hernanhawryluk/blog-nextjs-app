import NextAuth, { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth-options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
