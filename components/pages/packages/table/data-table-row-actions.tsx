"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Delete, MoreVertical, PenBoxIcon, PlusCircle } from "lucide-react";
import { packageSchema } from "./schema";
import { usePackageContext } from "../context/usePackageContext";
import { Package } from "@prisma/client";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const data = packageSchema.parse(row.original);
  const {
    setToggleEditInc,
    setSelected,
    setToggleEditExc,
    setToggleDelete,
    setToggleEditDates,
  } = usePackageContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreVertical className="w-4 h-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <PenBoxIcon className="w-4 h-4 mr-2" /> Edit Package
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem
              onClick={() => {
                setToggleEditInc(true);
                setSelected(data as Package);
              }}
              className="cursor-pointer"
            >
              Inclusions
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setToggleEditExc(true);
                setSelected(data as Package);
              }}
              className="cursor-pointer"
            >
              Exclusions
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setToggleEditDates(true);
                setSelected(data as Package);
              }}
              className="cursor-pointer"
            >
              Dates
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setToggleDelete(true);
            setSelected(data as Package);
          }}
          className="cursor-pointer"
        >
          <Delete className="w-4 h-4 mr-2" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
