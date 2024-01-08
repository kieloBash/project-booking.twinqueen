"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const ProfileNav = ({ user }: { user: any }) => {
  const firstName = user?.name?.split(" ")[0];
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex gap-2 items-center justify-center ml-8">
      <h1 className="font-semibold text-accent-500">Welcome {firstName}!</h1>
      <div
        className={`${
          isHovering && "shadow-md border border-gray-200 rounded-full"
        } w-10 h-10 relative`}
      >
        <div
          className="relative rounded-full w-full h-full overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
        >
          {user?.image && <Image src={user.image} alt="avatar" fill={true} />}
        </div>
        {isHovering && (
          <div
            onMouseLeave={() => setIsHovering(false)}
            className="w-40 bg-white rounded-md border border-gray-200 shadow-md absolute top-full mt-2 right-0 z-20"
          >
            <ul className="w-full flex flex-col text-black-1">
              <Link href={`/profile/inquiries`}>
                <li className="p-2 text-sm hover:bg-accent-100 transition-colors duration-100 ease-in">
                  View Inquiries
                </li>
              </Link>
              {user.role === "admin" && (
                <Link href={`/admin/dashboard`}>
                  <li className="p-2 text-sm hover:bg-accent-100 transition-colors duration-100 ease-in">
                    Admin Dashboard
                  </li>
                </Link>
              )}
              <li className="w-full">
                <button
                  type="button"
                  className="w-full text-left p-2 text-sm hover:bg-accent-100 transition-colors duration-100 ease-in"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileNav;
