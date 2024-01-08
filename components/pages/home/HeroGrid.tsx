import Image from "next/image";
import React from "react";
import HeroPic1 from "@/public/hero/hero1.jpg";
import HeroPic2 from "@/public/hero/hero2.jpg";
import ViewNowButton from "./btns/ViewNowButton";

const HeroGrid = () => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-1 mt-20 gap-4">
      <div className="w-full bg-white rounded-md shadow-lg flex flex-col py-8 px-12 gap-4">
        <p className="font-bold text-left text-3xl max-w-full">Philippines</p>
        <div className="w-full h-32 rounded-md relative overflow-hidden">
          <Image src={HeroPic1} alt="hero3" fill className="object-cover" />
        </div>
        <div className="w-full flex gap-6 items-end justify-between mt-3">
          <ViewNowButton />
          <p className="font-bold text-accent-500 text-2xl">$2,000</p>
        </div>
      </div>
      <div className="w-full bg-white rounded-md shadow-lg flex flex-col py-8 px-12 gap-4">
        <p className="font-bold text-left text-3xl max-w-full">Canada</p>
        <div className="w-full h-32 rounded-md relative overflow-hidden">
          <Image
            src={HeroPic2}
            alt="hero grid 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full flex gap-6 items-end justify-between mt-3">
          <ViewNowButton />
          <p className="font-bold text-accent-500 text-2xl">$1,900</p>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
