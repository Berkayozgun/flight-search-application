import React from "react";
import Image from "next/image";
import Logo from "../styles/logo-no-background.png";
const Header = () => {
  return (
    <div className="w-full h-24 px-6 py-2 bg-white flex justify-between items-center">
      <div className="flex w-40 justify-start items-center gap-4">
        <Image
          src={Logo}
          width={100}
          height={50}
          layout="responsive"
          alt="logo"
          className="ml-20"
        />
      </div>

      {/* Menü Bağlantıları */}
      <div className="p-20 flex justify-end items-center gap-8">
        <NavLink href="/" text="Flights" />
        <NavLink href="/hotels" text="Hotels" />
        <NavLink href="/packages" text="Packages" />
        <NavLink href="/signin" text="Sign in" />
        <div className="w-[95px] px-5 py-3 bg-indigo-500 rounded flex justify-start items-center gap-2">
          <button className="text-neutral-50 text-base font-normal font-sans">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, text }) => (
  <a href={href} className="p-2.5 flex justify-start items-center gap-2.5">
    <div className="text-center text-slate-400 text-base font-normal font-sans">
      {text}
    </div>
  </a>
);

export default Header;
