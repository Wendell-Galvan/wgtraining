import React from "react";
import Slideshow from "./Slideshow";

const Services = () => {
  return (
    <div
      id="services"
      className="h-full lg:h-full pt-10 md:pt-20 flex flex-col items-center bg-gradient-to-r from-yellow-500 to-green-800"
    >
      <h1 className="flex flex-col items-center text-4xl font-bold font-sans text-black">
        Services
      </h1>
      <div
        className="bg-cover bg-center my-10 pb-12 border-black border-2"
        style={{ backgroundImage: 'url("/images/gym1.jpg")' }}
      >
        <ul className="p-5 flex flex-col items-center font-mono lg:text-base text-white font-extrabold">
          <li className="p-2 bg-black bg-opacity-60">Personal Training</li>
          <li className="p-2 bg-black bg-opacity-60">2:1 Partner Training</li>
          <li className="p-2 bg-black bg-opacity-60">Small Group Training</li>
          <li className="p-2 bg-black bg-opacity-60">Athletic Development</li>
          <li className="p-2 bg-black bg-opacity-60">
            In-Home Personal Training
          </li>
        </ul>
      </div>
      <Slideshow />
    </div>
  );
};

export default Services;
