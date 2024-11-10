import { fetchCredicardsByEmail } from "@/app/lib/dataElements";
import DataTableItems from "@/components/shared/dataTableItems/DataTableItems";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const credicardPage = async () => {
  const session = await getServerSession();
  if (!session?.user || !session.user.email) {
    redirect("/");
  }

  const crediCards = await fetchCredicardsByEmail(session.user.email);

  if (!crediCards || !crediCards.elements) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold">List of credit cards</h1>
      <DataTableItems elements={crediCards.elements} />
    </div>
  );
};

export default credicardPage;
