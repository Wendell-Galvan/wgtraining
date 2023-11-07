import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
