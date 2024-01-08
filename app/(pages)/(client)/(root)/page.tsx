import Image from "next/image";
import HeroPic3 from "@/public/hero/hero3.jpg";
import HeroPic4 from "@/public/hero/hero4.jpg";
import SearchSection from "@/components/pages/home/SearchSection";
import HeroCard1 from "@/components/pages/home/card/HeroCard1";
import HeroGrid from "@/components/pages/home/HeroGrid";

export default function Home() {
  return (
    <main className="bg-accent-100">
      <section className="w-full h-full px-20 py-10 relative">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image src={HeroPic3} alt="hero1" fill className="object-cover" />
        </div>
        <div className="relative px-16 py-20 border-4 flex justify-center items-start gap-20 border-white rounded-3xl bg-white/30 backdrop-blur-md shadow-md">
          <HeroCard1 />
          <div className="max-w-[43rem]">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold text-accent-900 lg:text-5xl">
                Explore the world with Twin-Queen, your Travel Dream!
              </h1>
              <p className="mt-6 text-white max-w-lg">
                Indulge in Full-Time Enjoyment: Discover Tailored Travel
                Packages with Twin-Queen!
              </p>
            </div>
            <SearchSection />
            <HeroGrid />
          </div>
          <div className="hidden lg:flex flex-1 w-full max-w-md h-[42rem] relative overflow-hidden rounded-3xl shadow-xl border-2 border-white/30">
            <Image src={HeroPic4} alt="hero2" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
