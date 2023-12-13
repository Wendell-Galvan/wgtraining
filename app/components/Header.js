import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className={` ${poppins.className} flex justify-center`}>
        <h1 className="text-xl md:text-5xl text-black font-black font-sans">
          Train for&nbsp;
          <TypeAnimation
            sequence={[
              "Well-Being.",
              2000,
              "Sport.",
              2000,
              "Longevity.",
              2000,
              "Life.",
              15000,
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={false}
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
