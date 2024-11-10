import db from "@/lib/db";
import { formProfileSchema } from "@/lib/zod";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const data = await req.json();
    const validatedData = formProfileSchema.parse(data);
     const { email, name, id, profileImage } = validatedData;

    const profile = await db.user.update({
      where: {
        id,
      },
      data: {
        email,
        name,
        profileImage
      },
    });

    console.log('mis datos: ',validatedData)

    return NextResponse.json(profile);
  } catch (error) {
    console.log("[PROFILE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
