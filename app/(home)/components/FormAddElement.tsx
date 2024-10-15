"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { formAddElementSchema } from "@/lib/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Earth, Eye, Shuffle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { generatePass } from "@/lib/generatePass";
import { Textarea } from "@/components/ui/textarea";

export default function FormAddElement() {
  const [showPass, setShowPass] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formAddElementSchema>>({
    resolver: zodResolver(formAddElementSchema),
    defaultValues: {
      typeElement: "",
      directory: "",
      isFavorite: false,
      name: "",
      notes: "",
      password: "",
      urlWebSite: "",
      userId: "",
      username: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formAddElementSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  //Gereate passwor
  const generateRamdomPass = () => {
    const password = generatePass();
    // console.log('mi pass es: ', password)
    form.setValue("password", password);
  };

  const { toast } = useToast();
  const copyClipBoard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast({
      title: "Value copied  ✅",
    });
  };

  const updateURL = () => {
    form.setValue("urlWebSite", window.location.href);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:grid-cols-2 gap-y-2 gap-x-4 grid"
      >
        {/*directory select*/}
        <FormField
          control={form.control}
          name="typeElement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Que tipo de elemento necesitas?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Directory for your password" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Inicio de sesión">
                    Inicio de sesión
                  </SelectItem>
                  <SelectItem value="Tarjeta">Tarjeta</SelectItem>
                  <SelectItem value="Identiidad">Identiidad</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        {/*isFavorite check*/}
        <FormField
          control={form.control}
          name="isFavorite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ¿Quiere seleccionar tu contraseña como favorita?
              </FormLabel>
              <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Marcar como favorito</FormLabel>
                </div>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        {/*input name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*directory select*/}
        <FormField
          control={form.control}
          name="directory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Directorio</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige el directorio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Social">Social</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                  <SelectItem value="Shopping">Shopping</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        {/*username input */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} />
                  <Copy
                    className="absolute top-3 right-4 cursor-pointer"
                    size={18}
                    onClick={() => {
                      copyClipBoard(field.value);
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* urlwebsite input */}
        <FormField
          control={form.control}
          name="urlWebSite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url website</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} />
                  <Earth
                    className="absolute top-3 right-2 cursor-pointer"
                    size={18}
                    onClick={updateURL}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* pass input*/}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                Password{" "}
                <Shuffle
                  className="cursor-pointer"
                  size={15}
                  onClick={generateRamdomPass}
                />
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Input {...field} type={showPass ? "text" : "password"} />
                  <Eye
                    className="absolute top-3 right-10 cursor-pointer"
                    size={18}
                    onClick={() => setShowPass(!showPass)}
                  />
                  <Copy
                    className="absolute top-3 right-2 cursor-pointer"
                    onClick={() => copyClipBoard(field.value)}
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* pass authentication totp*/}

        <div>
          <div className="text-slate-400 flex items-center justify-between text-sm">
            Authentication TOTP
            <p className="px-3 bg-green-700 text-white rounded-lg text-sm mr-5">
              Premium
            </p>
          </div>
          <Input disabled />
        </div>

        {/* pass input*/}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
