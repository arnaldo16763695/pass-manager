import { fetchLoginsElementByEmail } from "@/app/lib/dataElements";
import DataTableItems from "@/components/shared/dataTableItems/DataTableItems";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const loginsElementPage = async () => {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/");
  }

  const loginsElement = await fetchLoginsElementByEmail(session.user.email);

  if (!loginsElement || !loginsElement.elements) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold">
        List of login elements
      </h1>
      <DataTableItems elements={loginsElement.elements} />
    </div>
  );
};

export default loginsElementPage;
