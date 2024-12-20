import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap justify-between gap-8 items-center sm:px-24 py-5 w-full bg-white ">

      <div className="flex items-start w-42 h-12">
        <Link href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5835db799b2f4afe78b59680705e8beae76f93a0f1301ee502d63ca74f9d6f0?apiKey=901e2c62034c49f99ee7efbfd55381ef&"
            alt="FolliCool Logo"
            className="object-contain w-42 h-12 "
          />
        </Link>
      </div>


      <button
        className="md:hidden text-[#36CCCC] text-xl "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>


      <nav
        className={`${menuOpen ? "flex" : "hidden"
          } flex-col gap-6 items-start text-xs  md:flex md:flex-row md:items-center md:gap-12 md:self-stretch md:my-auto min-w-[240px] `}
      >
      <div className=" flex w-[300px] gap-7 font-gothamMedium">
        <Link href="/about">
          <p
            className={
              router.pathname === "/about"
                ? `text-[#36CCCC] `
                : `text-black `
            }
          >
            About POO Token
          </p>
        </Link>
        <Link href="/product">
          <p className="text-black">My Account</p>
        </Link>
        <a href="#cart" className="text-black ">
          Cart (0)
        </a>
        </div>
      </nav>

      <button className="hidden md:flex px-6 py-3 text-sm whitespace-nowrap font-gothamMedium text-white bg-[#36CCCC] rounded-[80px] w-36">
        Shop FolliCool
      </button>
    </header>
  );
}
















