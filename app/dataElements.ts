'use server'

import db from "@/lib/db";

export async function fetchElementById(id: string){
    try {
        const element = await db.element.findUnique({
            where: {
              id
            },
          });

          return element;
    } catch (error) {
        console.log(error)
    }
} 