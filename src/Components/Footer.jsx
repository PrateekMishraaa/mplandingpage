import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-100 via-white to-green-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold font-serif mb-4 cursor-pointer">
            <span className="text-green-600">Mp</span>Holidays Pvt. LTD.
          </h2>
          <div className="flex items-start gap-3 mb-4">
            <FaLocationDot className="text-2xl text-red-600 mt-1" />
            <p className="font-medium hover:text-orange-600 transition cursor-pointer text-sm leading-6">
              G10 Near Nawada Metro Station, Shyam Park, Nawada Majra Village, New Delhi, Delhi, 110059
            </p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <PiPhoneCallFill className="text-xl text-red-600" />
            <p className="font-medium hover:text-orange-600 transition cursor-pointer text-sm">+91 9319184060</p>
          </div>
          <div className="flex items-center gap-3">
            <BiLogoGmail className="text-xl text-red-600" />
            <p className="font-medium hover:text-orange-600 transition cursor-pointer text-sm">welcome@mpholidays.in</p>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-6">Explore</h2>
          <ul className="flex flex-col gap-4">
            {["Home", "Destinations", "Experiences", "Blog", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-lg font-semibold hover:text-green-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-6">Resources</h2>
          <ul className="flex flex-col gap-4">
            {["About Us", "Our Services", "Travel Blog", "Contact Us", "FAQ"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-lg font-semibold hover:text-green-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About and Newsletter */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-4">About MpHolidays</h2>
          <p className="text-sm font-medium leading-6 mb-6">
            We are passionately committed to customer satisfaction, providing exceptional experiences with premium services at competitive rates. Personalized travel plans to create unforgettable memories.
          </p>
          <h3 className="font-bold font-serif mb-3">Subscribe to our newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="h-10 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
            />
            <button className="h-10 px-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom copyright line */}
      <div className="border-t mt-10 py-4 text-center text-sm text-gray-500">
        © 2022- 2025 MpHolidays Pvt. LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
