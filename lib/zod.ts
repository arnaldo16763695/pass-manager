import { z } from "zod";

export const formAddElementSchema = z.object({
  typeElement: z.string().min(2).max(50),
  isFavorite: z.boolean().default(false),
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  directory: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  urlWebSite: z.string().min(2).max(50),
  notes: z.string(),
  userId: z.string(),

});
