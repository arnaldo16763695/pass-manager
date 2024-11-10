"use client";

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, User } from "lucide-react";
import Link from "next/link";

export type ColumnsProps = Element;

export const columns: ColumnDef<ColumnsProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: "URL web Site",
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const password = row.original.password;
      const username = row.original.username;
      
      // const onEditElement = () => {
      //   console.log('editando')
      // };

      const copyItemClipboard = (item: string, name: string) => {
        navigator.clipboard.writeText(item);
        toast({
          title: `${name} copied ✅`,
        });
      };
      return (
        <div className="flex gap-2 justify-center items-center">
            {
              password && (
                <span title="Copy password" ><Copy className="w-4 h-4 cursor-pointer"  onClick={()=>copyItemClipboard(password,"Password")}/></span>
              )
            }
            {
              username && (
                <span title="Copy user"><User className="w-4 h-4 cursor-pointer" onClick={()=>copyItemClipboard(username,"Username")}/></span>
              )
            }
            <DropdownMenu>
              <DropdownMenuTrigger>
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  Actions
                </DropdownMenuLabel>
                <DropdownMenuItem className="cursor-pointer" ><Link href={`/element/${row.original.id}/edit`}>Edit</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )
    },
  },
];
