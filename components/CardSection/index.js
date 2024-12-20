import * as React from "react";
import { ProductFeature } from "./components/productFeatures";
import { ShopButton } from "./components/ShopButton";
import { productFeatures } from "./data/index";
import Image from "next/image";


export default function FolliCoolProduct() {
  return (
    <main className="flex overflow-hidden relative justify-between items-start p-20 w-full text-lg text-black bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <section className="flex overflow-hidden z-0 flex-col justify-center items-end px-12 py-20 my-auto bg-[#36CCCC] rounded-2xl min-w-[240px] w-[1415px] max-md:px-5 max-md:max-w-full   ">
        <div className="flex flex-col max-w-full w-[500px] ">
          <h1 className="text-6xl font-hornbill font-semibold leading-none max-md:max-w-full max-md:text-4xl ">
            Meet FolliCool
          </h1>
          <div className="mt-6 font-[325] max-md:max-w-full  text-sm font-gothamBook">
            <p>
              FolliCool is Shampoo's first product, a breakthrough in everyday
              hair health. Designed for all hair and skin types, FolliCool cleans
              and nourishes your hair follicles.
            </p>
            <div className="mt-4 ml-0 font-gothamMedium ">
              {productFeatures.map((feature, index) => (
                <div key={index}>
                  <ProductFeature text={feature.text} />
                  <br />
                </div>
              ))}
            </div>
          </div>
          <ShopButton />
        </div>
      </section>
      <Image
        loading="lazy"
        
        width={700}
        
        height={764}

        src={"/meetcolifool.png"}
        alt="FolliCool product bottle"
        className="object-contain  absolute left-21 z-0 self-start aspect-[1.28] h-[814px] min-w-[240px] -top-[122px] w-[600px] max-md:max-w-full  max-md:hidden "
      />
    </main>
  );
}









