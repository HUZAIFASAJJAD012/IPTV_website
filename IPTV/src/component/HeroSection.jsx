import React from 'react';
import hero from "../assets/hero.png";

function HeroSection() {
  return (
    <section className="bg-white relative py-10 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start">
      <div className="max-w-lg md:order-1">
        {/* Heading and Subheading */}
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 leading-tight text-center md:text-left">
          THE BEST INTERNATIONAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-500">IPTV</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-indigo-900 mt-4 text-center md:text-left">
          SERVICE PROVIDER
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a
            href="#"
            className="px-6 py-3 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition duration-200 shadow-md"
          >
            Free Trial →
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-indigo-900 text-white font-medium rounded-md hover:bg-indigo-800 transition duration-200 shadow-md"
          >
            Other Plans →
          </a>
        </div>
      </div>

      {/* Character Image */}
      <div className="mt-8 md:mt-0 md:ml-10 md:order-2 md:absolute md:right-0 md:bottom-0 max-w-sm w-full">
        <img
          src={hero}
          alt="Character watching TV"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;
