"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

// UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarProfile } from "./AvatarProfile";
import { User } from "@/interfaces/user.interface";

const ProfileNav = ({ user }: { user: User }) => {
  return (
    <div className="flex gap-2 items-center justify-center ml-8">
      <h1 className="font-semibold text-accent-500">Welcome!</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button">
            <AvatarProfile src={user.image} name={user.email} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={"start"}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          {user.role === "ADMIN" && (
            <>
              <DropdownMenuSeparator />
              <Link href={`/dashboard`}>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </Link>
            </>
          )}
          <DropdownMenuSeparator />
          <Link href={`/inquiries`}>
            <DropdownMenuItem>Inquire Now</DropdownMenuItem>
          </Link>
          <Link href={`/profile/inquiries`}>
            <DropdownMenuItem>View Inquiries</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileNav;
