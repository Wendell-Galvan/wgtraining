import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-green-800 py-2 sticky top-0 z-50 overflow-x-hidden">
      <div className="flex items-center justify-between mx-4 md:mx-40 max-w-screen-xl">
        <Link href="/" className="w-1/5">
          <Image
            src="/images/logo.png"
            width={200}
            height={100}
            alt="logo"
            className="rounded-2xl"
          />
        </Link>
        <div className="flex space-x-4 font-mono font-bold">
          <Link href="#about" className="hover:text-yellow-400">
            About
          </Link>
          <Link href="#services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="#contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
