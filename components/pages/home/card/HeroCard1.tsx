"use client";
import Image from "next/image";
import React from "react";
import HeroPic1 from "@/public/hero/hero1.jpg";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const HeroCard1 = () => {
  const router = useRouter();
  return (
    <div className="absolute top-40 -right-14 max-w-md px-6 py-5 bg-white rounded-md shadow-lg z-20 flex flex-col">
      <p className="font-semibold text-left pb-2 text-lg">USA</p>
      <div className="w-[12rem] h-32 rounded-md relative overflow-hidden">
        <Image src={HeroPic1} alt="hero3" fill className="object-cover" />
      </div>
      <p className="max-w-[12rem] text-sm pt-2">
        Choose the best deals for your travel dream
      </p>
      <Button
        type="button"
        className="mt-2"
        onClick={() => router.push("/discover")}
      >
        View Now
      </Button>
    </div>
  );
};

export default HeroCard1;
