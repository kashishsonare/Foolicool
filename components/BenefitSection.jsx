import * as React from "react";
import { BenefitCard } from "./BenefitCard";

const benefits = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7c7068904321ad0dd8f6958d082f7142bd53e97351d5d5dda46df710e3993a?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef",
    title: "Own the Brand",
    description: "Your purchase of FolliCool entitles you to membership in ShampooDAO, allowing you to control the future of FolliCool and our future product suite."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ae0b1787a2d578fe4d90a916bda52400efe31c6c00674c23206de2563b0cac5?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef",
    title: "Talk to experts",
    description: "The $POO token grants you access to HairDAO's best researchers, so you can learn more about your hair health."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f45a9137dd74c350bf8f37c1dd7b6973a5a1cc9a09ecf5a2872263757b03f4f9?placeholderIfAbsent=true&apiKey=901e2c62034c49f99ee7efbfd55381ef",
    title: "Invest in Breakthroughs",
    description: "Every purchase is a step towards breakthroughs in hair health, the cornerstone of ShampooDAO's mission statement."
  }
];

export function BenefitsSection() {
  return (
   
    <section
      className="flex flex-col md:flex-row bg-white text-black gap-4 md:gap-10 px-4 md:px-10 py-6 md:py-10 mx-4 md:mx-10 mt-20 md:mt-7 mb-10 md:mb-16 "
      aria-label="Product Benefits"
    > 
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          image={benefit.image}
          title={benefit.title}
          description={benefit.description}
         />
      ))}
    </section>
  );
}







