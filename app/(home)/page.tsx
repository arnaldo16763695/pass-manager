import { getServerSession } from "next-auth";
import HeaderMain from "./components/HeaderMain";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import TableData from "./components/dataTable/TableData";

export default async function Home() {
  const session = await getServerSession();

  if (!session || !session.user?.email) redirect("/login");

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      elements: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user) redirect("/");

  return (
    <div>
      <HeaderMain userId={user?.id} />
      <TableData elements={user.elements} />
    </div>
  );
}
