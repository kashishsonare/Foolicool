import * as React from "react";

function StatCard({ title, value, showLiveTag = false,isLive }) {
  return (
    <div className="flex flex-col   flex-1 shrink justify-center p-3 py-2  bg-black rounded-2xl basis-0  ">
      <div className="flex gap-10 justify-between items-start ">
        <div className="font-gotham text-xs sm:text-sm text-white px-1 font-gothamBook">{title}</div>
        {isLive && (
          <div className="px-2 py-0  text-xs sm:text-xs font-bold text-black whitespace-nowrap  bg-[#BFFF00] rounded-lg" role="status" aria-live="polite">
            LIVE
          </div>
        )}
      </div>
      <div className="mt-1 sm:text-xl text-xs text-[#36CCCC] px-1 font-gothamMedium">{value}</div>
    </div>
  );
}

export default StatCard;







