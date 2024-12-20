import React from "react";
import TokenStats from "./TokenStatsAbout";
import { DistributionChart } from "./DistributionChart";

export default function TokenDistributionLayout() {
  return (
    <main className="flex flex-col md:flex-row gap-10 px-6 md:px-24 bg-white text-cyan-950 justify-between items-center w-full max-md:mt-10 mb-20">
      <section className="flex flex-col self-stretch my-auto text-black min-w-full md:min-w-[240px] md:w-[685px]">
        <div className="flex flex-col w-full">
          <h1 className="text-4xl md:text-4xl font-hornbill font-bold leading-none ">
            $POO Distribution
          </h1>
          <p className="mt-6 mb-6 md:mt-4 text-base md:text-sm font-maven text-[#000000]">
            Shampoo buyers own 40% of the tokens, enabling them to vote on brand
            and research decisions. HairDAO holds 40% for developing our
            intellectual property, and Shampoo Operators receive 20% for
            operating the global supply chain.
          </p>
        </div>
        <div className="flex-col">
          <TokenStats />
        </div>
      </section>
      <DistributionChart />
    </main>
  );
}
