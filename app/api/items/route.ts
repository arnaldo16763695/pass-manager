import db from "@/lib/db";
import { formAddElementSchema } from "@/lib/zod";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validatedData = formAddElementSchema.parse(data);
    const {
      typeElement,
      isFavorite,
      name,
      directory,
      username,
      password,
      urlWebsite,
      notes,
      userId,
    } = await validatedData;

    const element = await db.element.create({
      data: {
        typeElement,
        isFavorite,
        name,
        directory,
        username,
        password,
        urlWebsite,
        notes,
        userId,
      },
    });

    return NextResponse.json(element);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: "Error de validación", errors: error.errors },
        { status: 400 }
      );
    }
    return new NextResponse("Internal error ", { status: 500 });
  }
}
