"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import  SidebarRoutes  from "../sidebarRoutes/SidebarRoutes";
import { Button } from "@/components/ui/button";

export default function SideBarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent hover:bg-blue-100/20">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-blue-800 text-white">
        <SheetHeader className="text-left mb-4">
          <SheetTitle className="text-white">Arnaldo Password</SheetTitle>
          <SheetDescription className="text-slate-100">
            Create and manage your passwords
          </SheetDescription>
        </SheetHeader>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
}
