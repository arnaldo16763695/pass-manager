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


export const loginFormSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1).max(14)
})

export const registerFormSchema = z.object({
    email: z.string().min(1).email(),
    name: z.string().min(1),
    password: z.string().min(1).max(14),
    password2: z.string().min(1).max(14),

})


