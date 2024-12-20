import * as React from "react";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a64ac6d4a66fa8b24c7ec46775f8b915c362c4dfd8531ace96cb022af20cd03?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
    title: "Soothes with Science",
    description: "For a balanced, comfortable scalp"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/474f8c83dc6b84f3f1b942d4ce252beb15bc0da5a254963264ce26c35e949a74?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
    title: "Volumizes with Conditioner",
    description: "Bouncy, soft hair that looks good"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e75aac22af20392c140a74181dccb380850260003635d608c3aa7ec52795df?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
    title: "Moisturizes with Emmollience",
    description: "Maintains your hairs natural moisture and pH"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d37e4be1f1ce818af5d0a6a04ee4b33723b0f44bbdd367acb9a0dc88ad0aa84?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
    title: "Preserved without Parabens",
    description: "None of the nasty stuff. Safe for every day use."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f305bd85ef061f61409e814e6057839b58c5d8e4547605b0ce595b0e819de76?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
    title: "Cleans without Sulfates",
    description: "Thin and dry hair loves FolliCool."
  }
];

export default function Features() {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[310px] max-md:max-w-full">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`flex  gap-6 items-center px-8 py-4 w-[500px] rounded-2xl border border-solid border-zinc-600 max-md:px-1 max-md:max-w-full ${index > 0 ? 'mt-6' : ''}`}
        >
          <img
            loading="lazy"
            src={feature.icon}
            alt={`${feature.title} icon`}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="flex flex-col grow shrink justify-center self-stretch my-auto min-w-[210px] w-[521px] max-md:max-w-full">
            <h3 className="text-[14px] sm:text-[18px] font-[350] max-md:max-w-full text-white font-gotham ">
              {feature.title}
            </h3>
            <p className="mt-1 text-[14px] sm:text:sm font-[350] text-gray-300  ">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}











