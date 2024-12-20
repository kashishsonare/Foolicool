import * as React from "react";

export function BenefitCard({ image, title, description }) {
  return (
    <article className="flex flex-col flex-1 shrink pb-6 border-b basis-0 border-zinc-300 min-w-[240px] max-md:max-w-full ">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain w-[380px] rounded-xl aspect-[1.48] "
      />
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2 w-full text-xl font-gothamMedium max-md:max-w-full">
          {title}
        </h2>
        <p className="mt-2 text-[12px] font-[325] max-md:max-w-full font-gothamBook ">
          {description}
        </p>
      </div>
    </article>
  );
}