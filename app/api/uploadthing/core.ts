import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async()=>{
    return {}
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {

    // Define as many FileRoutes as you like, each with a unique routeSlug
  profileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } }).middleware(()=>handleAuth()).onUploadComplete(()=>{

  })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter