import React from 'react';
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full  border-black">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4">
        <div className="h-16 w-40 mb-4 md:mb-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-full w-full object-contain cursor-pointer transition-transform duration-300 hover:scale-95"
          />
        </div>
        <div className="w-full md:w-[70%]">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-red-600 font-semibold italic">
            <li><a href="/">Explore</a></li>
            <li><a href="/experience">Experiences</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Get in touch</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
