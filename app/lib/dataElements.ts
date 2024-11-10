"use server";

import db from "@/lib/db";

export async function fetchElementById(id: string) {
  try {
    const element = await db.element.findUnique({
      where: {
        id,
      },
    });

    return element;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFavoriteElementByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      include: {
        elements: {
          where: {
            isFavorite: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchLoginsElementByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      include: {
        elements: {
          where: {
            typeElement: "Inicio de sesión",
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchCredicardsByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      include: {
        elements: {
          where: {
            typeElement: "Tarjeta",
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUser(email: string) {
  try {
    const user = db.user.findUnique({
      where: {
        email,
      },
      include: {
        elements: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
