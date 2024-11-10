import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "800"],
});

export const metadata: Metadata = {
  title: "Password Manager", 
  description: "Created by Arnaldo Espinoza",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png", // Ruta al favicon en la carpeta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
