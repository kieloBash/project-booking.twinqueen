import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-4 items-center justify-center">
      <div className="relative w-10 h-10 overflow-hidden bg-black">
        <Image src={""} alt="logo" fill={true} />
      </div>
      <h1 className="font-bold text-black-1 text-xl">Twin-Queen</h1>
    </Link>
  );
};

export default Logo;
