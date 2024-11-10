import { fetchFavoriteElementByEmail } from "@/app/lib/dataElements";
import DataTableItems from "@/components/shared/dataTableItems/DataTableItems";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const favoritesPage = async () => {
  const session = await getServerSession();

  if (!session || !session?.user?.email) {
    return redirect("/");
  }

  const favorites = await fetchFavoriteElementByEmail(session.user.email);

  if (!favorites) {
    return redirect("/");
  }
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold" >List of Favorites</h1>
      <DataTableItems elements={favorites.elements} />
    </div>
  );
};

export default favoritesPage;
