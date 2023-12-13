"use client";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className={`${poppins.variable}`}>
      <About />
      <Services />
      <Contact />
    </div>
  );
}
