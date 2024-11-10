"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormProfileProps } from "./FormProfile.type";
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
import { formProfileSchema } from "@/lib/zod";
import Image from "next/image";
import { useState } from "react";
import { UploadButton } from "@/app/lib/uploadthing";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormProfile = (props: FormProfileProps) => {
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const { user } = props;
  const { toast } = useToast();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formProfileSchema>>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      profileImage: user.profileImage || "",
      id: user.id,
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formProfileSchema>) => {
    // console.log(values);
    try {
      await axios.patch("api/profile", values);
      toast({
        title: "Profile updated ✌️",
        className: "bg-green-600",
      });

      router.refresh();
      setShowUploadPhoto(false);
      setPhotoUploaded(false);
    } catch (error) {
      toast({
        title: "Sonthing went wrong" + error,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="profileImage"
            render={() => (
              <FormItem>
                {/* <FormLabel>Profile Image</FormLabel> */}
                <FormControl>
                  <div className="flex gap-2 items-center mt-8 ">
                    <div className="">
                      <Image
                        src={
                          user.profileImage
                            ? user.profileImage
                            : "/images/default-profile.png"
                        }
                        alt="image profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div className="w-[200px]  flex items-center justify-center">
                      {showUploadPhoto ? (
                        <UploadButton
                          className="rounded-md text-slate-200 bg-slate-700 w-[200px] p-2 h-14"
                          // {...field}
                          endpoint="profileImage"
                          onClientUploadComplete={(res) => {
                            form.setValue("profileImage", res?.[0].url);
                            setPhotoUploaded(true);
                          }}
                          onUploadError={(error: Error) => {
                            console.log(error);
                          }}
                        />
                      ) : (
                        <Button
                          onClick={() => setShowUploadPhoto((prev) => !prev)}
                          className=""
                        >
                          <Upload
                            className="
                         w-4 h-4 mr-2"
                          />
                          Change Photo
                        </Button>
                      )}
                    </div>
                    {photoUploaded && <p className="text-sm">Image uploaded</p>}
                  </div>
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
                  <Input {...field} disabled />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormProfile;
