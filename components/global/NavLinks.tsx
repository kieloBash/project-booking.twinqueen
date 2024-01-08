"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ClientNavLinks } from "@/lib/constants/ClientNavLinks";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center items-center gap-6 flex-[3]">
      {ClientNavLinks.map((link: any) => {
        const isActive =
          (pathname.includes(link.href) && link.href.length > 1) ||
          pathname === link.href;

        return (
          <Link href={link.href} key={link.label}>
            <li
              className={`${
                isActive
                  ? "text-accent-500 font-semibold"
                  : "text-black-1 hover:text-accent-300"
              } capitalize transition-colors duration-100 ease-in`}
            >
              {link.label}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;
