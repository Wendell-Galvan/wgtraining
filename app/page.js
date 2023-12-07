"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
    <main className={`${poppins.variable}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <div className="flex justify-center text-white text-xs pb-6">
        Copyright © 2023 Wendell Galvan
      </div>
    </main>
  );
}
