import React from "react";
import Slideshow from "./Slideshow";

const Services = () => {
  return (
    <div
      id="services"
      className="pt-20 flex flex-col items-center h-screen bg-gradient-to-r from-yellow-500 to-green-800"
    >
      <h1 className="flex flex-col items-center text-4xl font-bold font-sans text-black">
        Services
      </h1>
      <div
        className="bg-cover bg-center m-10 h-1/2"
        style={{ backgroundImage: 'url("/images/gym1.jpg")' }}
      >
        <ul className="p-10 flex flex-col items-center justify-center font-mono">
          <li className="p-1 font-extrabold text-white bg-black bg-opacity-60">
            Personal Training
          </li>
          <li className="p-1 font-extrabold text-white bg-black bg-opacity-60">
            2:1 Partner Training
          </li>
          <li className="p-1 font-extrabold text-white bg-black bg-opacity-60">
            Small Group Training
          </li>
          <li className="p-1 font-extrabold text-white bg-black bg-opacity-60">
            Athletic Development
          </li>
          <li className="p-1 font-extrabold text-white bg-black bg-opacity-60">
            In-Home Personal Training
          </li>
        </ul>
      </div>
      <Slideshow />
    </div>
  );
};

export default Services;
