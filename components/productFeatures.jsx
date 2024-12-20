import * as React from 'react';

export function ProductFeature({ icon, title, description }) {
  return (
    <div className="flex  gap-6 items-center py-4 pl-5 w-[480px] rounded-2xl border border-solid border-zinc-300 max-md:pl-5 ]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="flex flex-col grow shrink justify-center self-stretch my-auto min-w-[240px] w-[521px] max-md:max-w-full">
        <div className="text-sm sm:text-xl font-[350] max-md:max-w-full font-gothamBook">
          {title}
        </div>
        <div className="mt-1 text-sm sm-text-xl font-[325] max-md:max-w-full font-gothamBook ">
          {description}
        </div>
      </div>
    </div>
  );
}