import Image from "next/image";
import React from "react";

const distributionData = [
  {
    percentage: 40,
    label: "ShampooDAO Operator",
  },
  {
    percentage: 40,
    label: "FolliCool\nPurchasers",
  },
  {
    percentage: 40,
    label: "HairDAO",
  },
];

export function DistributionChart() {
  return (
    <section
      className="self-stretch pt-3 pb-0.5 my-auto min-w-[240px] w-[627px] max-md:max-w-full"
      aria-label="Token Distribution Chart"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[11%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 text-black max-md:mt-10">
            {distributionData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center ${
                  index > 0 ? "pl-6 mt-20 max-md:pl-5 max-md:mt-10 font-maven" : "pl-6"
                }`}
              >
                <div className="text-3xl font-bold font-mono leading-none max-md:text-4xl max-sm:text-3xl">
                  {item.percentage}
                  <span className="text-2xl text-black max-md:text-2xl font-maven">%</span>
                </div>
                <div className="mt-1 text-sm text-left font-[350] whitespace-pre-line max-md:text-sm max-sm:text-xs font-gotham  ">
                  {item.label}
                </div>
       

              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-12 flex-col ml-6 w-full max-md:ml-0 max-md:w-full">
          <Image
            src="/newpie.png"
            alt="Pie chart"
            width={576}
            height={546}
            className="max-w-96 max-h-96 max-md:w-[90%] max-md:mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
