



import React from "react";

const tokenStatsData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6895c6c60d584813daac74e4b7c19f642158e998be5a3a1253a7d6818a6f5083?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef",
    value: "100 Billion",
    label: "Total Supply",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8112768c379e79acadc3fbcb733f0927fcbba882d8aea13bc1f0c2bbfabb3589?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef",
    value: "Basee",
    label: "Network",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5560b56f3b484d476588a3c53fa9428071f4036cd66cc9be87b3b6090996a9ba?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef",
    value: "ERC20",
    label: "Token Standard",
  },
];

export default function TokenStats() {
  return (
    <div className="flex flex-col items-start mt-1 w-full text-sm sm:text-xl max-md:mt-10">
      {tokenStatsData.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-left px-4 py-4 sm:px-6 sm:py-4 mt-5 first:mt-0 rounded-2xl border border-solid border-zinc-300 w-full sm:w-[350px]"
          role="group"
          aria-label={`${stat.label} Statistics`}
        >
          <img
            loading="lazy"
            src={stat.icon}
            alt=""
            className="object-contain shrink-0 w-8 h-8 sm:w-8 sm:h-8"
          />
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full">
            <span className=" text-center sm:text-left font-semibold">{stat.value}</span>
            <span className="font-light text-black  text-left sm:text-left sm:text-lg">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
