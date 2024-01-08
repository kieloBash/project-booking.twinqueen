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
    },
  });
  if (!newData) return false;

  return true;
}
