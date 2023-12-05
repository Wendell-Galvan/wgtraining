import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="h-1/2 flex justify-center items-start max-w-screen md:pt-5 bg-gradient-to-r from-yellow-500 to-green-800">
      <div className="flex justify-center">
        <h1 className="text-xl md:text-7xl text-black font-black font-sans">
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
