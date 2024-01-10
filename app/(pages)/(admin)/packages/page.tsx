import PackagesTable from "@/components/pages/packages/main";
import { AddPackageModal } from "@/components/pages/packages/modals/add";
import { Label } from "@/components/ui/label";
import { PageProps } from "@/interfaces/page.interface";
import React from "react";

const PackagesPage = ({ searchParams }: PageProps) => {
  console.log(searchParams);
  const page = searchParams?.page ? Number(searchParams?.page) : 1;
  return (
    <article className="flex flex-col w-full gap-4 p-2">
      <header className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <Label className="text-2xl font-semibold">Packages</Label>
          <p className="">This is where you can add or view your packages</p>
        </div>
        <AddPackageModal page={page} />
      </header>
      <PackagesTable />
    </article>
  );
};

export default PackagesPage;
