"use client";
import { Package } from "@prisma/client";
import React, { createContext, useState, useContext } from "react";

const PackageContext = createContext<{
  toggleEditInc: boolean;
  setToggleEditInc: (sel: boolean) => void;
  toggleEditExc: boolean;
  setToggleEditExc: (sel: boolean) => void;
  toggleEditDates: boolean;
  setToggleEditDates: (sel: boolean) => void;
  toggleDelete: boolean;
  setToggleDelete: (sel: boolean) => void;

  selected: Package | undefined;
  setSelected: (sel: Package | undefined) => void;
}>({
  toggleEditInc: false,
  setToggleEditInc: (sel: boolean) => {},
  toggleEditExc: false,
  setToggleEditExc: (sel: boolean) => {},
  toggleEditDates: false,
  setToggleEditDates: (sel: boolean) => {},
  toggleDelete: false,
  setToggleDelete: (sel: boolean) => {},

  selected: undefined,
  setSelected: (sel: Package | undefined) => {},
});

export const PackageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggleEditInc, setToggleEditInc] = useState(false);
  const [toggleEditExc, setToggleEditExc] = useState(false);
  const [toggleEditDates, setToggleEditDates] = useState(false);

  const [toggleDelete, setToggleDelete] = useState(false);

  const [selected, setSelected] = useState<Package>();

  return (
    <PackageContext.Provider
      value={{
        toggleEditInc,
        setToggleEditInc,
        toggleEditExc,
        setToggleEditExc,
        toggleEditDates,
        setToggleEditDates,
        toggleDelete,
        setToggleDelete,

        selected,
        setSelected,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export const usePackageContext = () => useContext(PackageContext);
