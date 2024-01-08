import { AddPackageModal } from "@/components/pages/packages/modals/add";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";

const PackagesPage = () => {
  return (
    <article className="w-full p-2 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <Label className="text-2xl font-semibold">Packages</Label>
          <p className="">This is where you can add or view your packages</p>
        </div>
        <AddPackageModal />
      </div>
    </article>
  );
};

export default PackagesPage;
