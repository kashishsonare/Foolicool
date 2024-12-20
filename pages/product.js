import * as React from "react";
import { ProductFeature } from "../components/productFeatures";
import { IngredientTag } from "../components/Ingredients";
import { productFeatures, ingredients } from "../data/productData";
import {FooterSection3} from "@/components/FooterProduct";
import Image from "next/image";

export default function FolliCoolProduct() {


  const [quantity, setQuantity] = React.useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <main className="flex flex-col items-end  max-md:pl-1 mt-24">
      <div className="flex flex-col w-full max-w-[1680px] max-md:max-w-full">
        <section className="flex flex-wrap gap-10 items-start align-items px-24 w-full bg-white max-md:px-5 max-md:py-0 max-md:max-w-full">
   
          <div className="flex flex-1 shrink justify-center basis-0 min-w-[240px] sm:mb-24">
            <Image
              width={200}
              height={200}
              loading="lazy"
              src="/image.png"
              alt="FolliCool Shampoo bottle"
              className="object-contain flex-1 shrink w-full rounded-2xl aspect-square basis-0 min-w-[140px] max-md:max-w-full w-124 "
            />
           </div>
    
          <div className="flex flex-col flex-1 shrink justify-center py-4 basis-0 min-w-[240px] ">
            <div className="flex flex-col w-full text-black max-md:max-w-full">
              <div className="flex flex-col self-start font-bold max-md:max-w-full mt-20">
                <h1 className="sm:text-5xl text-lg font-hornbill leading-none max-md:max-w-full max-md:text-4xl">
                  FolliCool Shampoo
                </h1>
                <div className="flex gap-3 items-center self-start mt-2 text-xl">
                  <div className="self-stretch my-auto">7 FL OZ </div>
                  <div className="self-stretch my-auto">200ml</div>
                </div>
              </div>
              <p className="mt-4 sm:text-sm text-xs font-[305] max-md:max-w-full font-gothamBook">
                We wanted a product that maximised our hair's moisture and
                volume, without irritating our skin or clogging our pores.<br/>
                
                So we made FolliCool - a shampoo is designed with a deep
                understanding of molecular biology and dermatology
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 items-start self-start mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-8 items-center px-2 sm:px-2 sm:py-0 py-0 bg-white border border-solid border-zinc-300 min-h-[60px] rounded-[80px]">
                <button
                  onClick={handleDecrement}
                  aria-label="Decrease quantity"
                  className="flex gap-2.5 justify-center items-center self-stretch my-auto w-10 h-10 bg-black min-h-[40px] rounded-[100px]"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f274506879914d5c5ef18c3ebf85f8f0de7cc00c4c2280e1e2b647aac1e8409?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef"
                    alt=""
                    className="object-contain self-stretch my-auto w-8 aspect-square"
                  />
                </button>
                <div className="self-stretch my-auto text-lg text-black font-[350]">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrement}
                  aria-label="Increase quantity"
                  className="flex gap-2.5 justify-center items-center self-stretch my-auto w-10 h-10 bg-black min-h-[40px] rounded-[100px]"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b0ba565db27ca598ee902343dd53ee76ee7869722661af85631edfeb49382b9?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef"
                    alt=""
                    className="object-contain self-stretch my-auto w-8 aspect-square"
                  />
                </button>
              </div>
         
              <button className="gap-2 self-stretch px-8 py-6 sm:py-4 text-sm sm:text-lg text-white bg-black font-[350] min-w-[240px] rounded-[80px] w-[100px] max-md:px-5">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        <section className="flex overflow-hidden flex-wrap gap-10 items-start px-24 pb-32 w-full text-black bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[600px] max-md:max-w-full">
            <h2 className="text-sm sm:text-4xl font-hornbill leading-none max-md:text-4xl">
              Ingredients
            </h2>
            <div className="flex flex-wrap gap-4 items-start mt-6 w-full text-xs sm:text-xs  max-w-[688px] max-md:mt-10 max-md:max-w-full font-abeezee">
              {ingredients.map((ingredient, index) => (
                <IngredientTag key={index} {...ingredient} />
              ))}
            </div>
          </div>
      
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-96 mt-4">
            {productFeatures.map((feature, index) => (
              <div key={index} className={index > 0 ? "mt-2 sm:mt-4 " : ""}>
                <ProductFeature {...feature} />
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-4 sm:py-16 w-full  text-6xl font-bold text-white bg-black min-h-[100px] max-md:max-w-full max-md:text-xl ">
          <div className="animate-scroll flex items-center whitespace-nowrap">
            <span className="text-lime-400 mx-4 ">Power to the people! </span>
            Get 1,000,000 $POO with every purchase of FolliCool.
            <span className="text-lime-400 mx-4">Power to the people! </span>
            Get 1,000,000 $POO with every purchase of FolliCool.
         
            <span className="text-lime-400 mx-4">Power to the people! </span>
            Get 1,000,000 $POO with every purchase of FolliCool.
            <span className="text-lime-400 mx-4">Power to the people! </span>
            Get 1,000,000 $POO with every purchase of FolliCool.
          </div>
        </section>

       


        <FooterSection3/>
      </div>
    </main>
  );
}










