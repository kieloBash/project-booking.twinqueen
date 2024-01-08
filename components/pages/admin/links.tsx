"use client";
import { AdminNavLinks } from "@/lib/constants/AdminNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
  const pathname = usePathname();
  return (
    <ul className="mt-8 text-white flex-1">
      {AdminNavLinks.map((link, index) => {
        const isActive =
          (pathname.includes(link.href) && link.href.length > 1) ||
          pathname === link.href;

        const activeClass = isActive ? "bg-green-400" : "hover:text-green-400";
        return (
          <Link
            href={link.href}
            className={`${activeClass} flex gap-2 justify-start items-center p-2 transition-colors`}
            key={index}
          >
            {<link.icon />}
            <span className="capitalize">{link.label}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default Links;
