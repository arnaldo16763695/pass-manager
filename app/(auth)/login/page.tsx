import { redirect } from "next/navigation";
import ImageAuth from "./components/ImageAuth";
import TabsForms from "./components/TabsForms";
import { getServerSession } from "next-auth";

const LoginPage = async () => {
  
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  console.log("holaaa: ", session);
  return (
    <div className="grid md:grid-cols-2 h-full max-h-screen overflow-hidden">
      <div className="flex justify-center h-full">
        <div className="text-white flex flex-col items-center justify-center p-6">
          <h1 className="text-blue-500 text-2xl text-center mb-5">AJE pass</h1>
          <h2>Welcome back</h2>
          <p className="text-center mt-4 mb-6 text-slate-400 text-sm">
            Welcome back. Please enter your detail
          </p>
          <TabsForms />
        </div>
      </div>
      <ImageAuth />
    </div>
  );
};

export default LoginPage;
