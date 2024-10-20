import db from "@/lib/db";
import { registerFormSchema } from "@/lib/zod";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import {z} from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validate data
    const validatedData = registerFormSchema.parse(body);
    const { email, password, name } = validatedData;
    const hashedPass = await hash(password, 10);
  
    const user = await db.user.create({
      data: {
        email,
        hashedPassword: hashedPass,
        name,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: "Error de validación", errors: error.errors },
        { status: 400 }
      );
    }
    return new NextResponse("Internal Error", {
      status: 500,
      statusText: JSON.stringify(error),
    });
  }
}
