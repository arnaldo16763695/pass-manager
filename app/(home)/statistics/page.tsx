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
      <div className="grid md:grid-cols-2 gap-4 mb-4 ">
        <RepeatedPassChart repeated={repeated} unique={unique} />
        <div>Second block</div>
      </div>
      <div>Block</div>
    </div>
  );
};

export default StatisticsPage;
