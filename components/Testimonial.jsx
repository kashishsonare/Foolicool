







import * as React from "react";

const testimonials = [
  {
    text: "The shampoo is an absolute banger. Even my gf loves it.",
    author: "pueth762",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe8fd9938fca92ff5419e9cbc4988d5c4a74bcb5c914b10966742eb004a462ea?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
  },
  {
    text: "I've thrown out my luxury ones. This is the best shampoo I've used.",
    author: "mcSteamy",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/61d3fc21886ad8473e52a2b4c396e96e94727cb18e5f1a942794a465dd4cbf79?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
  },
  {
    text: "I can't believe how well this works.",
    author: "ethcat5050",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebd86d2c04f2dffe0b541ef664af8ca1e4e3f324b8c3cf54c237c224a8174493?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
  },
  {
    text: "Shut up and take my money!!!",
    author: "charlesG",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b2307db2f04837f1bc826db7fe4a1fa280434e4f243a0e573c25870c24f40b?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
  },
  {
    text: "I've thrown out my luxury ones. This is the best shampoo I've used.",
    author: "mcSteamy",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/61d3fc21886ad8473e52a2b4c396e96e94727cb18e5f1a942794a465dd4cbf79?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
  },
];


export default function TestimonialSection() {
  return (
    <section className="flex flex-col items-start justify-center py-28 pl-24 w-full bg-black max-md:py-24 max-md:pl-5 overflow-hidden">
      <h2 className="text-xl font-hornbill text-white leading-snug sm:text-4xl">
        Your Hair, <br />
        Our Responsibility
      </h2>

      <div className="flex gap-6 items-start mt-10 max-md:flex-wrap overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col w-[260px] max-w-[251px] bg-transparent"
          >
           
            <p className="text-gray-100 text-[12px] tracking-wide font-gothamBook">
              {testimonial.text}
            </p>


            <div className="flex items-center gap-2 mt-4">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.author}'s avatar`}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-[#B5B5B5] text-xs">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



