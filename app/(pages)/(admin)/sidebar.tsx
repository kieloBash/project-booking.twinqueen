import { AvatarProfile } from "@/components/global/AvatarProfile";
import Links from "@/components/pages/admin/links";
import { User } from "@/interfaces/user.interface";
import { authOptions } from "@/lib/authOptions";
import { LogOutIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const LeftSidebar = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as User;
  return (
    <article className="w-48 h-screen fixed top-0 left-0 bg-black-1 flex flex-col p-4">
      <div className="w-full flex gap-2 justify-start items-center">
        <AvatarProfile src={user.image} name={user.email} />
        <h1 className="text-lg font-bold text-white">TwinQueen</h1>
      </div>

      <Links />

      <div className="items-end">
        <Link
          href={"/"}
          className={`flex gap-2 justify-start items-center p-2 transition-colors text-white hover:text-green-400`}
        >
          <LogOutIcon />
          <span className="capitalize">Exit</span>
        </Link>
      </div>
    </article>
  );
};

export default LeftSidebar;
