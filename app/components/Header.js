import React from "react";

const Header = () => {
  return (
    <div className="h-1/2 flex justify-center items-start md:pt-10 max-w-screen bg-gradient-to-r from-yellow-500 to-green-800">
      <div className="flex justify-center">
        <h1 className="text-xl md:text-7xl text-black font-black font-sans">
          Functional Training. Whatever your Function.
        </h1>
        <h2></h2>
      </div>
    </div>
  );
};

export default Header;
