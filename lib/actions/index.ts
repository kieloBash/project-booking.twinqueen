"use server";

import prisma from "../prisma";

export async function getUserByEmail({ email }: { email: string }) {
  const user = await prisma.user.findFirst({ where: { email } });

  if (!user) return null;
  return user;
}

interface Params {
  account: any;
  profile: any;
}

export async function signInWithOAuth({ account, profile }: Params) {
  const user = await prisma.user.findFirst({ where: { email: profile.email } });

  if (!user) {
    await prisma.user.create({
      data: {
        email: profile.email,
        image: profile.picture,
        role: "CUSTOMER",
      },
    });
  }
  return true;
}
