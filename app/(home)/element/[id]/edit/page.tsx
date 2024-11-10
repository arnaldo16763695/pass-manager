import { fetchElementById } from "@/app/lib/dataElements";
import FormEditElement from "@/components/shared/formEditElement/FormEditElement";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

const editElementPage = async ({ params }: { params: { id: string } }) => {
  const sessiion = await getServerSession();
  if (!sessiion?.user || !sessiion.user.email) {
    return redirect("/");
  }

  const element = await fetchElementById(params.id);

  if (!element) {
    notFound();
  }

  return (
    <div>
      <h1>Editing</h1>
      <div>
        <FormEditElement dataElement={element} />
      </div>
    </div>
  );
};

export default editElementPage;
