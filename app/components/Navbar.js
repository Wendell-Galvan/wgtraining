import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-2 top-0 z-5 overflow-x-hidden">
      <div className="flex items-center justify-between mx-4 md:mx-40 max-w-screen-xl">
        <Image
          src="/images/logo.png"
          width={200}
          height={100}
          alt="logo"
          className="w-1/4"
        />
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-yellow-400">
            Home
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
