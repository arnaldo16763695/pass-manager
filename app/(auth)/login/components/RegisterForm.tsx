"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      password2: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
     const response = await fetch('/api/auth/register',{
        method: 'POST',
        body: JSON.stringify(values)
     })

     if (response.ok) {
        router.push('/')
        toast({
            title: 'Register successfuly ✌️'
        })
     }else{
        toast({
            title: 'Error: ',
            variant: 'destructive'
        })
     }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="password"
                    type={`${showPass ? "text" : "password"}`}
                    {...field}
                  />
                  {showPass ? (
                    <EyeOffIcon
                      size={20}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    />
                  ) : (
                    <Eye
                      size={20}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    />
                  )}
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="password"
                    type={`${showPass ? "text" : "password"}`}
                    {...field}
                  />
                  {showPass ? (
                    <EyeOffIcon
                      size={20}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    />
                  ) : (
                    <Eye
                      size={20}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    />
                  )}
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
