import { z } from "zod";

export const formAddElementSchema = z.object({
  typeElement: z.string().min(2).max(50),
  isFavorite: z.boolean().default(false),
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  directory: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  urlWebsite: z.string().min(2).max(50),
  notes: z.string(),
  userId: z.string(),

});

export const formEditElementSchema = z.object({
  typeElement: z.string().min(2).max(50),
  isFavorite: z.boolean().default(false),
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  directory: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  urlWebsite: z.string().min(2).max(50),
  notes: z.string(),
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
export const formProfileSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().min(1).email().max(50),
    profileImage: z.string(),
    id: z.string()

})


