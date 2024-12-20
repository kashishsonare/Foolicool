import * as React from "react";

function InfoCard({ title, content }) {
  return (
    <article className="flex flex-col grow shrink min-w-[240px] w-[518px] max-md:max-w-full ">
      <h2 className=" font-hornbill sm:text-2xl text-sm font-bold leading-none">{title}</h2>
      <p className="mt-6 sm:text-sm text-xs font-[325] max-md:max-w-full text-white font-gothamBook">{content}</p>
    </article>
  );
}

export default InfoCard;