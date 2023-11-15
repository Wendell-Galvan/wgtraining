import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-full bg-cover bg-center"
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
            height={100}
            width={100}
            className="object-contain"
          />
        </div>
        <div className="flex-col justify-center md:w-2/3 lg:w-1/2 p-2 md:p-10 md:pt-24 text-sm md:text-base  bg-black bg-opacity-80 md:bg-opacity-0 font-serif">
          <p className="bg-black bg-opacity-0 md:bg-opacity-80 rounded-lg p-2">
            Wendell is a Certified Functional Strength Coach, Pain-Free
            Performance Specialist, and former Physical Therapist Assistant
            (PTA). Having worked with a wide variety of injuries and chronic
            pain, he values injury-prevention and improving overall well-being
            by creating specialized training programs.
          </p>
          <br />
          <p className="bg-black bg-opacity-0 md:bg-opacity-80 rounded-lg p-2">
            Wendell is a life-long athlete and was fortunate enough to play
            football through college. His passions now include hiking, golfing,
            and snowboarding to name a few. He would not have succeeded in his
            physical achievements without help of the health professionals he
            had surrounding him. Wendell decided to become a Physical Therapist
            Assistant to help others get back to doing what they love. During
            his time as a PTA he began to notice that non-sport related injury
            patients had little to no experience working out, which often led to
            injuries and chronic pain in the first place. He decided to start
            this business to bridge that gap and provide the necessary tools to
            live a meaningful, healthy, well-rounded life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
