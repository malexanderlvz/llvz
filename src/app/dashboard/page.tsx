import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  if (!session) redirect("/api/auth/signin?callbackUrl=/dashboard");

  return <div></div>;
};
export default Page;
