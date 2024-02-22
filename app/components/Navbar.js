"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-green-800 w-full py-2 sticky top-0 z-30">
      <div className="flex items-center justify-between mx-4 lg:mx-16 ">
        <Link href="/" className="w-1/4 md:w-1/5">
          <Image
            src="/images/logo.png"
            width={200}
            height={100}
            alt="logo"
            className="rounded-2xl"
          />
        </Link>
        <Header />
        <div className="hidden lg:flex space-x-4 font-mono text-lg font-bold text-black">
          <Link href="#about" className="hover:text-yellow-400 hover:scale-105">
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-yellow-400 hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="hover:text-yellow-400 hover:scale-105"
          >
            Contact
          </Link>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-black lg:hidden"
        >
          {nav ? <GiWeightLiftingUp size={40} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-500 to-green-800 text-black">
            <li
              key={1}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                href="#about"
                className="hover:text-yellow-400"
              >
                About
              </Link>
            </li>
            <li
              key={2}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                href="#services"
                className="hover:text-yellow-400"
              >
                Services
              </Link>
            </li>
            <li
              key={3}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                href="#contact"
                className="hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
