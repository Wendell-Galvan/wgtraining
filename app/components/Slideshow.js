"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = () => {
  return (
    <div className="my-4 flex justify-center">
      <Carousel
        autoPlay
        interval={5000}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        className="w-2/3 sm:mx-auto sm:w-1/2 lg:w-1/3 bg-white"
      >
        <div>
          <img src="/images/review1.png" alt="Review 1" />
        </div>
        <div>
          <img src="/images/review2.png" alt="Review 2" />
        </div>
        <div>
          <img src="/images/review3.png" alt="Review 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slideshow;
