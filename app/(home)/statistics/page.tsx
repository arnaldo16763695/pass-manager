import { fetchUser } from "@/app/lib/dataElements";
import { countPassword } from "@/lib/countPasword";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { RepeatedPassChart } from "./components/RepeatedPassChart";

const StatisticsPage = async () => {
  const session = await getServerSession();

  if (!session?.user || !session?.user?.email) {
    redirect("/");
  }

  const userDb = await fetchUser(session.user.email);

  if (!userDb || !userDb.elements) {
    redirect("/");
  }

  const { unique, repeated } = countPassword(userDb.elements);
  //   console.log("unicas: ", unique);
  //   console.log("repetidas: ", repeated);
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold p-6">Statistics</h1>
      <div className="grid grid-cols-2 gap-2 ">
        <RepeatedPassChart repeated={repeated} unique={unique} />
        <div className="border"></div>
      </div>
      <div className="w-full border p-4 h-32"></div>
    </div>
  );
};

export default StatisticsPage;
