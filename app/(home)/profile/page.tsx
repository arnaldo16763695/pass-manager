import { fetchUser } from "@/app/lib/dataElements";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import FormProfile from "../components/FormProfile";

const ProfilePage = async () => {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/");
  }

  const userDb = await fetchUser(session.user.email);
  if (!userDb) {
    redirect("/");
  }
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold">Account details</h1>
      <FormProfile user={userDb} />
    </div>
  );
};

export default ProfilePage;
