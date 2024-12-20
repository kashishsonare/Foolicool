import React from 'react'
import Features from '../Features'

const SectionThree = () => {
  return (
    <section className="flex overflow-hidden py-28 flex-wrap gap-20 px-20 items-start  w-full text-white bg-black max-md:px-5 max-md:py-24 max-md:max-w-full">
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full mx-2">
      <div className="flex flex-col  max-md:max-w-full w-[510px] ">
        <h2 className="font-hornbill text-5xl font-normal leading-[50px] max-md:text-3xl max-md:leading-10">
          Proportions
          <br />
          Matter
        </h2>
        <p className="font-normal mt-4 text-sm lg:text-[14px]  font-abeezee">
          FolliCool shampoo is designed with a deep understanding of
          molecular biology and dermatology, carefully calibrated to deliver
          the ideal mix of amino acids, flavonoids, and micro-nutrients.
          Each element plays a precise role—nourishing the scalp, repairing
          damaged strands, and restoring natural shine. Backed by research
          and formulated with precision, our shampoo doesn't just clean; it
          works on a molecular level to strengthen and revive hair from the
          roots up.
        </p>
      </div>
      <button className="gap-2 self-start font-gothamMedium px-6 py-4 sm:py-4 mt-8 text-sm bg-[#36CCCC] font-[325] rounded-[80px] max-md:px-5">
        Shop FolliCool
      </button>
    </div>
    <Features />
    </section>
  )
}

export default SectionThree





