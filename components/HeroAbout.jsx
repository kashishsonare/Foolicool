import * as React from "react";
import TokenStats from "./TokenStats";
import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-start px-24 w-full bg-white min-h-[630px] max-md:px-5 max-md:py-0 max-md:max-w-full">
      <Image
        loading="lazy"
        width={1680}
        height={892}
        src="/banner.png"
        alt=""
        className="object-cover absolute inset-0 w-full h-full z-0 sm:w-full sm:h-auto "
      />
      <div className="flex z-10 flex-col items-start max-w-full w-[880px] relative max-md:w-full max-md:px-0 mb-0">
        <div className="flex flex-col self-stretch  sm:w-3/5 w-32  text-black ">
          <h1 className="text-sm sm:text-6xl font-hornbill leading-[72px] max-md:text-3xl mt-0 ">
            Introducing ShampooDAO.
          </h1>


          <p className="mt-6 text-sm sm:text-4xl font-hornbill leading-4 max-md:text-xs max-md:leading-10">
          <div className="w-[500px] leading-10 ">
            Take control of your
            </div>
             follicular future!
          </p>
        </div>

        <div className="flex flex-row sm:flex-row">
          <TokenStats />
        </div>



        <button className="gap-2 self-stretch w-full sm:w-auto md:w-64 lg:w-72 px-8 py-6 sm:py-5 mt-10 text-xs sm:text-sm text-white bg-black rounded-[80px] max-md:px-5 max-md:mt-10">
          Become a member - Get $POO
        </button>

      </div>
    </section>
  );
}
