"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Package } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Package>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="min-w-[150px] w-full">{row.getValue("name")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
    cell: ({ row }) => (
      <div className="min-w-[150px] w-full">{row.getValue("location")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => (
      <div className="flex min-w-[100px]">
        ${Number(row.getValue("price")).toLocaleString()}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <Badge variant="outline">{row.getValue("status")}</Badge>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "inclusions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inclusions" />
    ),
    cell: ({ row }) => {
      const arr: string[] = row.getValue("inclusions") || [];
      return <div className="w-[100px] text-left">{arr.length} items</div>;
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "exclusions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exclusions" />
    ),
    cell: ({ row }) => {
      const arr: string[] = row.getValue("exclusions") || [];
      return <div className="w-[100px] text-left">{arr.length} items</div>;
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "dates",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dates" />
    ),
    cell: ({ row }) => {
      const arr: string[] = row.getValue("dates") || [];
      return <Badge variant="outline">{arr.length} date/s</Badge>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row);
      return <DataTableRowActions row={row} />;
    },
  },
];
