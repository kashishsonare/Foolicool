import * as React from "react";
import StatCard from "../StatsCard";

const stats = [
  {
    title: "Next Halvening",
    value: "298 : 21 : 56 : 46",
  },
  {
    title: "$POO per bottle",
    value: "1,000,000",
  },
  {
    title: "Price per $POO",
    value: "$0.00001668",
    isLive: true,
  },
];

export function FolliCoolHero() {
  return (
    <main className="overflow-hidden pl-0 pr-4 pt-14 pb-8 bg-white w-full mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[66%] max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <article className="flex flex-col text-base text-black mx-24 max-md:mx-4">
              <div className="flex flex-col w-full">
                <h1 className="text-3xl sm:text-lg md:text-4xl font-hornbill leading-16 sm:leading-20 max-md:text-xl max-md:leading-6 tracking-wide font-bold">
                  FolliCool was developed by a global community working to solve hair loss
                </h1>
                <p className="mt-4 sm:text-xs md:text-xs font-[325] tracking-normal font-gothamBook max-md:text-sm">
                  When you buy your first bottle of FolliCool, you're joining a community of people who care about healthy hair. It's an investment in your trichological wellbeing, but also an invitation to own a piece of the FolliCool brand, and to participate in a future where better hair is the norm.
                </p>
                <button
                  className="flex gap-2 items-center self-start mt-4 font-[350] underline underline-offset-1 max-md:text-sm"
                  aria-label="Learn more about ShampooDAO and the POO token"
                >
                  <span className="text-xs font-bold max-md:text-sm">
                    Learn more about ShampooDAO and the POO token
                  </span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd794304e27b1c49bf10522b99b3a1a4186d8d5aa84f60831dbb707246729948?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square max-md:w-3"
                  />
                </button>
              </div>
            </article>
            <div className="flex flex-col mt-24 max-md:mt-10 mx-20 max-md:mx-4 ">
              <div className="flex flex-wrap gap-4 items-start max-w-2 sm:max-w-full w-[710px]  text-xs ">
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    isLive={stat.isLive}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <aside className="flex flex-col ml-8 w-[40%] max-md:w-full sm:hidden lg:block max-md:mx-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7d84f960ca390038652f28a21e5238c15be063cf2caf8f5792f6ab36e79e71d?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef"
            alt="FolliCool product visualization"
            className="object-contain w-full aspect-[1.15] max-md:aspect-auto sm:w-96 sm:h-80"
          />
        </aside>
      </div>
    </main>
  );
}















