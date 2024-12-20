import * as React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex overflow-hidden relative  lg:flex-row flex-col justify-between items-start px-24 w-full text-lg text-black bg-white min-h-[650px] max-md:px-5 max-md:py-24 max-md:max-w-full max-sm:px-2 max-sm:py-16">
      <div className="flex z-0 pt-28 flex-col max-w-full w-[680px]  max-sm:pt-0 ">
        <h1 className={`font-hornbill  text-6xl  "`}>
          <span className="text-4xl sm:text-6xl">Shampoo.</span>  
          <br />
          <span className="text-[#36CCCC] text-4xl sm:text-6xl">Now with even </span>
          <br />
          <span className="text-[#36CCCC] text-4xl sm:text-6xl">more Science.</span>
        </h1>
        <div className="max-md:max-w-full  w-[550px] ">
          <p className = "text-[14px] font-gothamBook text-left leading-[21.6px] mt-4  ">
            Designed for all hair and skin types, FolliCool cleans and nourishes
            your hair follicles, without drying your skin or clogging your
            pores. Our researchers designed a solution to moisturize, soothe,
            and protect, without harmful parabens or sulfates.  
          </p> 
         
         <div className="mt-2 sm:mt-4">
          <ul>
            <li className="font-gothamMedium text-black text-sm">• For all hair and skin types</li>
            <li className="font-gothamMedium text-black text-sm" >• A pH of 5.5 maintains your scalp's acid mantle</li>
            <li className="font-gothamMedium text-black text-sm">• Moisturizes, soothes, and protects</li>
          </ul>
          </div>
        </div>
        <button className="gap-2 self-start px-6 py-4 mt-6 mb-4  text-white bg-[#36CCCC] font-[350] rounded-[80px] max-md:px-5 max-sm:px-4 max-sm:py-4 font-gothamMedium text-sm">
          Get Better Hair Now
        </button>
      </div>
      <Image
        loading="lazy"
        src="/heroProduct.png"

        width={841}
        height={1080}

        alt="FolliCool Shampoo Bottle"
        className="object-contain relative -bottom-0 z-0  max-w-full aspect-[1.05] sm:h-[650px] left-0 sm:left-16 "
      />
      
    </section>
  );
}













