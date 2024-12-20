import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
    <main className="flex overflow-hidden relative flex-col justify-center text-white">
      <div className="flex relative  z-0 flex-col items-center self-center max-md:max-w-full">
        <Image
          loading="lazy"
          src={'/Swimming Pool 1.png'}
         
          width={2479}
          height={855}
          // className="object-contain  z-0 self-start aspect-[2.07] h-[855px] left-[-931px] top-[-574px] w-[2479px] "

          alt='dss'
        />

      <div className="flex flex-col items-center justify-center w-full absolute top-8 sm:top-72">
     <div>
     <h1 className=" font-hornbill z-0 text-xs sm:text-[42px]  leading-none max-md:max-w-full max-md:text-xl">
          Better hair awaits...
        </h1>
     </div>
       <div>
       <Link
        href="/product"
          className=" w-42 sm:mt-8 sm:w-42 flex items-center text-center justify-center self-stretch px-8 py-4 sm:py-4  mt-2 sm:mb-0 mb-4 text-sm sm:text-sm bg-black font-[350] rounded-[80px] max-md:px-5 font-gothamMedium"
          type="button"
          aria-label={'Shop FolliCool'}
        >
          Shop FolliCool
        </Link>
       </div>

      </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b38288a3ee7d9a8ac6a7cf1a495a4c95f6d8bc87f0db56df1bf64fec751391?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef"
        className="object-contain absolute inset-x-0 -bottom-4 z-0 aspect-[12.82] h-[50px] sm:h-[132px] top-2xl w-[1680px] max-md:max-w-full"
        alt='dss'
      />

    </main>
  );
}




