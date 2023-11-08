import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center pt-5 md:pt-10 mb-20"
      style={{ backgroundImage: "url(/images/gym6.jpg)" }}
    >
      <h1 className="flex items-center justify-center text-yellow-500 font-bold text-2xl mb-5 md:pb-20"></h1>
      <div className="md:flex sm:justify-evenly bg-black bg-opacity-50 md:bg-opacity-80">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={"/images/profile.png"}
            alt="Profile pic"
            height={400}
            width={400}
            className="object-contain"
          />
        </div>
        <div className="flex sm:hidden justify-center">
          <Image
            src={"/images/profile.png"}
            alt="Profile pic"
            height={100}
            width={100}
            className="object-contain"
          />
        </div>
        <div className="flex-col justify-center md:w-2/3 lg:w-1/2 p-2 md:p-10 text-sm md:text-base">
          <p>
            My name is Wendell and I am a Certified Functional Strength Coach
            and Pain-Free Performance Specialist. As a former Physical Therapist
            Assistant, I value injury-prevention and creating specialized
            training programs to improve overall well-being.
          </p>
          <br />
          <p>
            I am a life-long athlete and was fortunate enough to play football
            through college. My passions now include hiking, golfing, and
            snowboarding to name a few. I would not have succeeded in my
            physical achievements without the health professionals I had
            surrounding me. I decided to become a Physical Therapist Assistant
            to help others get back to doing what they love. During my time as a
            PTA I began to notice that non-sport related injury patients had
            little to no experience working out, which often led to injuries and
            chronic pain in the first place. I decided to start this business to
            bridge that gap and provide you the necessary tools to live a
            meaningful, healthy life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
