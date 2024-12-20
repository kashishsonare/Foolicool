import * as React from "react";

const statsData = [
  {
    label: "Next Halvening",
    value: "298 : 21 : 56 : 46"
  },
  {
    label: "$POO per bottle",
    value: "1,000,000"
  },
  {
    label: "Price per $POO",
    value: "$0.00001668",
    badge: "LIVE"
  }
];

export default function TokenStats() {
  return (
    // <div className="flex flex-wrap gap-0 items-start px-6 py-1 mt-14 bg-white rounded-2xl max-md:px-5 max-md:mt-4 max-md:max-w-auto">
     <div className="flex flex-wrap gap-0 items-start px-6 py-3 mt-14 bg-white rounded-2xl max-md:px-5 max-md:mt-4 max-md:max-w-auto">
      {statsData.map((stat, index) => (
        <React.Fragment key={stat.label}>
          {index > 0 && (
            <div className="shrink-1 w-0 border border-black border-solid sm:h-[70px] h-[20px] mx-4" />
          )}
          <div className="flex flex-col justify-center p-2 sm:p-4 rounded-2xl">
            <div className="text-xs sm:text-sm font-bold text-[#36CCCC]">{stat.label}
            {stat.badge && (
                <span className="px-2 py-1  text-xs sm:text-xs text-black whitespace-nowrap bg-[#BFFF00] rounded-lg ml-4">
                  {stat.badge}
                </span>
              )}
            </div>
            <div className="mt-1 text-xs sm:text-xl text-black  font-semibold	">
              {stat.value}
              
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}





