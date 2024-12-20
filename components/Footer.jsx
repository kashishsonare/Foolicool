import * as React from "react";

export default function Footer() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/44b141a21dc42e2448552dae67bc7afaf1fc798824bef550595cc5cd526a0d50?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
      alt: "Twitter",
      link: "https://twitter.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee523c323cffcf1ce25c9dc05236d5e7e3a97519956bb62d72fef34d5483e808?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
      alt: "Facebook",
      link: "https://facebook.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6490f34d09379cc118d4055d9c82bc87be1f756cca73d1d4ce5aa99b4478882?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
      alt: "Instagram",
      link: "https://instagram.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09a65031fd5e2f9bcf6d20b4f2a33f3b3f718ae42495b43b292aee8301b93512?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
      alt: "LinkedIn",
      link: "https://linkedin.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/504f690b81084db96eb60f17e57b2335822a948f70eee72126d081185b471325?apiKey=901e2c62034c49f99ee7efbfd55381ef&",
      alt: "YouTube",
      link: "https://youtube.com",
    },
  ];

  return (
    <footer className="bg-black text-white py-4 px-8  ">
      <div className="container mx-auto max-w-6xl flex flex-wrap items-start justify-between gap-8 md:gap-0 mt-16 mb-20">
        
        <div className="flex flex-col text-base font-light text-neutral-500 w-full md:w-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb34c699625a8e2cb6a8da6fc12c76fd77bbc85365a451ad7f8e8e7d9680ca24?apiKey=901e2c62034c49f99ee7efbfd55381ef&"
            alt="HairDAO Logo"
            className="object-contain max-w-full aspect-[3.88] w-[210px] mx-auto md:mx-0"
          />
          <p className="mt-10 text-center md:text-left max-md:mt-4 text-sm sm:text-sm mb-10 sm:w-[400px] text-[#949494] ">
            HairDAO is a group of scientists and citizens<br></br> working together to
            solve male and female <br></br>pattern hair loss.
          </p>
          <p className="mt-4 text-center md:text-left max-md:mt-4 text-sm text-[#949494]">
            © 2024 HairDAO. All rights reserved.
          </p>
        </div>

        <div className="flex gap-28">
        <nav className="hidden md:flex flex-col gap-1 mt-0 font-gothamBook">
          <a href="#home" className="text-sm">HairDAO Home</a>
          <a href="#help" className="text-sm mt-2">Help Us Solve Hair Loss</a>
        </nav>
        <nav className="hidden md:flex flex-col gap-1 mt-0 font-gothamBook">
          <a href="#terms" className="text-sm">Terms & Conditions</a>
          <a href="#privacy" className="text-sm mt-2">Privacy Policy</a>
          <a href="#cookies" className="text-sm mt-2">Cookie Policy</a>
        </nav>

       
        <div className="flex flex-row gap-4 justify-center md:justify-start mt-0">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              aria-label={`Visit our ${icon.alt} page`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 w-6 aspect-square "
              />
            </a>
          ))}
        </div>
        </div>


      </div>

     
      {showMobileNav && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-8">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="hover:underline">HairDAO Home</a>
            <a href="#help" className="hover:underline">Help Us Solve Hair Loss</a>
            <a href="#terms" className="hover:underline">Terms & Conditions</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#cookies" className="hover:underline">Cookie Policy</a>
          </nav>
        </div>
      )}
    </footer>
  );
}
