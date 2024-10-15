"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { dataHeaderMain } from "./headerMain.data";
import { useState } from "react";
import FormAddElement from "./FormAddElement";

export default function HeaderMain() {
  const [typeElement, setTypeElement] = useState<"password" | "folder" | "">();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
    setOpenDropDown(false);
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl md:text-3xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DropdownMenu open={openDropDown} onOpenChange={setOpenDropDown}>
          <DropdownMenuTrigger asChild>
            <Button>
              Nueva <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                    <Button
                      key={typeElement}
                      className="justify-start"
                      variant="ghost"
                      onClick={() => setTypeElement(typeElement)}
                    >
                      <Icon className="w-4 h-4 mr-2 " />
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px]" aria-describedby="">
          <DialogHeader>
            <DialogTitle>Nuevo elemento</DialogTitle>
          </DialogHeader>
          {typeElement === "password" && <FormAddElement />}
          {typeElement === "folder" && <p>Form folder</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
}