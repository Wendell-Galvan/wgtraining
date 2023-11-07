import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center pt-5 md:pt-10 mb-20"
      style={{ backgroundImage: "url(/images/gym6.jpg)" }}
    >
      <h1 className="flex items-center justify-center text-yellow-500 font-bold text-2xl mb-5 md:pb-20"></h1>
      <div className="md:flex sm:justify-evenly bg-black bg-opacity-70">
        <div className="flex justify-center items-start">
          <Image
            src="/images/profile.png"
            alt="Profile pic"
            height={600}
            width={600}
            className="object-cover"
          />
        </div>
        <div className="flex-col justify-center md:w-2/3 lg:w-1/2 p-10">
          <p>
            My name is Wendell and I am a Certified Functional Strength Coach
            and Pain-Free Performance Specialist. As a former Physical Therapist
            Assistant, I value injury-prevention and create functional training
            programs to improve strength while reducing injuries and pain.
          </p>
          <br />
          <p>
            I am a life-long athlete and was fortunate enough to play football
            through college. I now have a passion for hiking, golfing, and
            snowboarding. I would not have succeeded in my physical achievements
            without the health professionals surrounding me. I decided to become
            a Physical Therapist Assistant and began to notice that patients
            with non-sport related injuries had little to no experience working
            out, which often led to injuries and chronic pain in the first
            place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
