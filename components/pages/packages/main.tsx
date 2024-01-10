"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { columns } from "./table/columns";

// BACKEND
import usePackagesPage from "./hooks/usePackagesPage";
import { DataTable } from "./table/data-table";
import { PackageProvider } from "./context/usePackageContext";
import { UpdateInclusionsModal } from "./modals/update-inclusions";
import { UpdateExclusionsModal } from "./modals/update-exclusions";
import { DeletePackageModal } from "./modals/delete";
import { UpdateDatesModal } from "./modals/update-dates";

const PackagesTable = () => {
  const params = useSearchParams();
  const page = params.get("page") ? params.get("page") : 1;
  const packages = usePackagesPage(Number(page));

  if (packages.isLoading)
    return (
      <article className="flex items-center justify-center flex-1">
        <Loader2 className="w-6 h-6 animate-spin" />
      </article>
    );

  return (
    <PackageProvider>
      <article className="flex-1">
        <UpdateInclusionsModal page={Number(page)} />
        <UpdateExclusionsModal page={Number(page)} />
        <UpdateDatesModal page={Number(page)} />

        <DeletePackageModal page={Number(page)} />
        <DataTable
          data={packages?.data || []}
          columns={columns}
          total={packages?.total || 0}
        />
      </article>
    </PackageProvider>
  );
};

export default PackagesTable;
