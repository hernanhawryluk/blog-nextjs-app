import { authOptions } from "@/utils/auth-options";
import { getServerSession } from "next-auth";

export default async function getAuthSession() {
  return await getServerSession(authOptions);
}
