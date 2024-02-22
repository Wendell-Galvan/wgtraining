import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="flex sm:items-center h-full w-full bg-cover bg-top bg-fixed overflow-auto lg:overflow-hidden"
      style={{ backgroundImage: "url(/images/gym6.jpg)" }}
    >
      <div className="md:flex sm:justify-evenly">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={"/images/profile.png"}
            alt="Profile pic"
            height={400}
            width={400}
            className="object-contain"
          />
        </div>
        <div className="flex sm:hidden justify-center bg-black bg-opacity-80">
          <Image
            src={"/images/profile.png"}
            alt="Profile pic"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
        <div className="flex-col justify-center md:w-2/3 lg:w-1/2 p-2 md:p-10 md:pt-24 text-sm md:text-base lg:text-lg bg-black bg-opacity-80 md:bg-opacity-0 font-serif">
          <div className="flex justify-center">
            <h1 className="text-2xl lg:text-3xl md:mb-8 p-2 bg-black bg-opacity-0 md:bg-opacity-80 rounded-lg font-sans">
              Personal Training Programs Catered to&nbsp;
              <span className="text-yellow-500">YOU</span>
            </h1>
          </div>
          <p className="bg-black bg-opacity-0 md:bg-opacity-80 rounded-lg p-2">
            Wendell is a Certified Functional Strength Coach, Pain-Free
            Performance Specialist, and former Physical Therapist Assistant
            (PTA). Having worked with a wide variety of pathologies, he values
            injury-prevention and improving overall well-being in creating
            specialized training programs. He is based in Monroe, WA and trains
            clients at{" "}
            <a
              href="https://maps.app.goo.gl/hESEYSKd2zvz9pbeA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Elite Training Academy
            </a>{" "}
            as well as In-Home.
          </p>
          <br />
          <p className="bg-black bg-opacity-0 md:bg-opacity-80 rounded-lg p-2">
            Wendell is a life-long athlete and was fortunate enough to play
            football through college. His passions now include hiking, golfing,
            and snowboarding to name a few. Wendell decided to become a Physical
            Therapist Assistant to help others get back to being active and
            doing what they love. During his time as a PTA he began to notice
            some patients had little or no recent experience with resistance
            training, which may have contributed to their pain and injuries in
            the first place. He decided to start this business to bridge that
            gap and provide the necessary tools to live a meaningful, healthy,
            well-rounded life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
