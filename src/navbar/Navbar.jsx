// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your logo or brand name can go here */}

        {/* Navigation links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-black">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-black">About</p>
          </Link>
          <Link href="/services">
            <p className="text-black">Services</p>
          </Link>
          <Link href="/contact">
            <a className="text-black">Contact</a>
          </Link>
        </div>

        {/* Responsive button */}
        <div className="md:hidden">
          <button className="text-black">
            {/* You can use an icon like a burger menu here */}
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
