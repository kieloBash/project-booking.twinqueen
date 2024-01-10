"use server";

import prisma from "@/lib/prisma";

export async function createPackage({
  name,
  location,
  price,
}: {
  name: string;
  location: string;
  price: number;
}) {
  const newData = await prisma.package.create({
    data: {
      name,
      location,
      price,
      dates: [],
      inclusions: [],
      exclusions: [],
    },
  });
  if (!newData) return false;

  return true;
}

export async function fetchPackages({ page = 1 }: { page: number }) {
  const data = await prisma.package.findMany({});

  if (!data) return [];

  return data;
}

export async function deletePackage({ selectedID }: { selectedID: string }) {
  const data = await prisma.package.delete({ where: { id: selectedID } });

  if (!data) return false;

  return true;
}

export async function updateInclusions({
  selectedID,
  inclusions,
}: {
  selectedID: string;
  inclusions: string[];
}) {
  const data = await prisma.package.update({
    where: { id: selectedID },
    data: { inclusions },
  });

  if (!data) return false;

  return true;
}

export async function updateExclusions({
  selectedID,
  exclusions,
}: {
  selectedID: string;
  exclusions: string[];
}) {
  const data = await prisma.package.update({
    where: { id: selectedID },
    data: { exclusions },
  });

  if (!data) return false;

  return true;
}

export async function updateDates({
  selectedID,
  dates,
}: {
  selectedID: string;
  dates: Date[];
}) {
  const data = await prisma.package.update({
    where: { id: selectedID },
    data: { dates },
  });

  if (!data) return false;

  return true;
}
