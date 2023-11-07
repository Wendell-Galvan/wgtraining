import React from "react";
import Slideshow from "./Slideshow";

const Services = () => {
  return (
    <div id="services" className="pt-16 flex flex-col items-center h-screen">
      <h1 className="flex flex-col items-center font-bold text-lg text-yellow-400">
        Services
      </h1>
      <div
        className="bg-cover bg-center m-10 h-1/2"
        style={{ backgroundImage: 'url("/images/gym5.jpg")' }}
      >
        <ul className="p-10 flex flex-col items-center justify-center">
          <li className="p-1 font-extrabold text-black bg-yellow-100 bg-opacity-25">
            Personal Training
          </li>
          <li className="p-1 font-extrabold text-black bg-yellow-100 bg-opacity-25">
            2:1 partner training
          </li>
          <li className="p-1 font-extrabold text-black bg-yellow-100 bg-opacity-25">
            Small group training
          </li>
          <li className="p-1 font-extrabold text-black bg-yellow-100 bg-opacity-25">
            Athletic Development
          </li>
        </ul>
      </div>

      <Slideshow />
    </div>
  );
};

export default Services;
