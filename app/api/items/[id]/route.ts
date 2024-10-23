import db from "@/lib/db";
import { formEditElementSchema } from "@/lib/zod";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const validatedData = formEditElementSchema.parse(data);
  try {
    const element = await db.element.update({
      where: {
        id: params.id,
      },
      data: {
        ...validatedData,
      },
    });
    const res = NextResponse.json(element)
    console.log('--*--> ' , res)
    return NextResponse.json(element)
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
